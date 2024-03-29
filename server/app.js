const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "https://vidly-3j26.onrender.com",
		methods: ["GET", "POST"]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", ({ signalData, idFromCall, name }) => {

		io.to(idFromCall).emit("callAccepted", { signal: signalData, name })
	});

	socket.on("callEnded", (id) => {
		io.to(id).emit("callEnded");

	})
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));