const mongoose = require("mongoose")
const createServer = require("./server")
const SubjectModel = require("../models/subject")
const supertest = require("supertest")

beforeEach((done) => {
	mongoose.connect(
		`mongodb+srv://admin:admin@treino.dvm1cph.mongodb.net/?retryWrites=true&w=majority`,
		{ useNewUrlParser: true },
		() => done()
	)
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	})
})

test("GET /subject", async () => {
	const subject = await SubjectModel.create({
		code: "FGA0000",
		name: "Teste",
	})

	await supertest(app)
		.get("/subject")
		.expect(200)
		.then((response) => {
			// Check the response type and length
			expect(Array.isArray(response.body)).toBeTruthy()
			expect(response.body.length).toEqual(1)

			// Check the response data
			expect(response.body[0].code).toBe(subject.code)
			expect(response.body[0].name).toBe(subject.name)
		})

    await SubjectModel.findOneAndDelete({"code": subject.code})
})

test("GET /subject/:code", async () => {
	const subject = await SubjectModel.create({
		code: "FGA0001",
		name: "Teste1",
	})

	await supertest(app)
		.get("/subject/" + subject.code)
		.expect(200)
		.then((response) => {
			expect(response.body.code).toBe(subject.code)
			expect(response.body.name).toBe(subject.name)
		})

    await SubjectModel.findOneAndDelete({"code": subject.code})
})

test("POST /subject/:code/review", async () => {
    const subject = await SubjectModel.create({
		code: "FGA0002",
		name: "Teste2",
	})

	await supertest(app)
		.get("/subject/" + subject.code)
		.expect(200)
		.then((response) => {
			expect(response.body.code).toBe(subject.code)
			expect(response.body.name).toBe(subject.name)
		})


	const review = {
		professor: "Teste",
		title: "Teste",
        comment: "Teste",
        rating: 3.2,
	}

	await supertest(app)
		.post("/subject/" + subject.code + "/review")
		.send(review)
		.expect(200)
		.then(async (response) => {
			// Check the response
            expect(response.body.professor).toBe(review.professor)
			expect(response.body.title).toBe(review.title)
			expect(response.body.comment).toBe(review.comment)
			expect(response.body.rating).toBe(review.rating)
		})

        await SubjectModel.findOneAndDelete({"code": subject.code})
    })


const app = createServer()