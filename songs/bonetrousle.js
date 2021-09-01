g.swim.song1 = "bonetrousle"
g.swim.song = "bonetrousle"
g.swim.clear()
g.swim.speed(110)
g.swim.bpm = 150
g.swim.add_script_ms(0, -4000, ["custom_dialouge", [{
	text: "hello there", 
	tags: {
		W: ["otohimeNeutral"]
	},
	U: [],
	delay: 0.25
},{
	text: "oi shut", 
	tags: {
		W: ["luckyNeutral"]
	},
	U: [],
	delay: 0.25
},{
	text: "hey :(", 
	tags: {
		W: ["otohimeNeutral"]
	},
	U: [],
	delay: 0.25
},{
	text: "fite me", 
	tags: {
		W: ["luckyNeutral"]
	},
	U: [],
	delay: 0.25
},{
	text: "oke", 
	tags: {
		W: ["otohimeNeutral"]
	},
	U: [],
	delay: 0.25
}]])

g.swim.add_script_ms(0, -4000, ["set", "alpha", 0])
g.swim.add_script_ms(1, -4000, ["set", "alpha", 0])
g.swim.add_script_ms(2, -4000, ["set", "alpha", 0])
g.swim.add_script_ms(3, -4000, ["set", "alpha", 0])
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(0, -3000+i*1000, ["add", "alpha", 0.05])
}
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(1, -2000+i*1000, ["add", "alpha", 0.05])
}
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(2, -1000+i*1000, ["add", "alpha", 0.05])
}
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, i*1000, ["add", "alpha", 0.05])
}
time = 0.25

g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(1, time)
time += 1
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(1, time)
time += 1
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(1, time)
time += 1
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(1, time)
time += 1
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5

g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 1
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(1, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 2.5

g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(3, time)
time += 0.25
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 2.5

g.swim.add_note(0, time)
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(2, time)
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
g.swim.add_note(1, time)
time += 1
g.swim.add_note(3, time)
time += 1
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 1
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 2.5

g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(3, time)
time += 0.25
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(1, time, false, 1.8)
time += 0.5
g.swim.add_note(1, time, false, 1.8)
time += 0.25
g.swim.add_note(2, time, false, 1.8)
time += 0.25
g.swim.add_note(0, time, false, 1.8)
time += 0.5

//shits goin down here
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.01) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["add", "x", -(1-Math.abs(i-0.5)*2)/2])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "x", -(1-Math.abs(i-0.5)*2)/6])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "x", (1-Math.abs(i-0.5)*2)/2])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["add", "x", (1-Math.abs(i-0.5)*2)/6])
	g.swim.add_script_ms(4, n_ms(time)+i*n_ms(0.5), ["speed", 110+i*50])
}
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.25
g.swim.add_note(2, time)
time += 0.25
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(2, time)
time += 0.25
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.25
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5

g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.25
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(2, time)
time += 0.25
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.25
g.swim.add_note(2, time)
time += 0.25
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5


g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.25
g.swim.add_note(2, time)
time += 0.25
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(2, time)
time += 0.25
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.25
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}

for (let i = 0; i <= 1; i += 0.01) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["add", "x", (1-Math.abs(i-0.5)*2)/2])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "x", (1-Math.abs(i-0.5)*2)/6])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "x", -(1-Math.abs(i-0.5)*2)/2])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["add", "x", -(1-Math.abs(i-0.5)*2)/6])
}
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(0, time)
time += 1
g.swim.add_note(2, time)
time += 1
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(3, time)
time += 0.5
g.swim.add_note(1, time)
time += 1
g.swim.add_note(0, time)
time += 1
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(0, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(3, time)
time += 1
g.swim.add_note(3, time)
time += 1
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(0, time)
time += 1

g.swim.add_note(3, time)
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(1), ["add", "alpha", -0.05])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(1), ["add", "rotation", -i])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(1), ["add", "y", i])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(1), ["add", "alpha", -0.05])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(1), ["add", "rotation", i])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(1), ["add", "y", i])
}
time += 1
g.swim.add_note(1, time)
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "alpha", -0.05])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "rotation", -i])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "y", i])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "alpha", -0.05])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "rotation", i])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "y", i])
}
time += 0.5

g.swim.add_script_ms(0, n_ms(time), ["set", "rotation", 0-10])
g.swim.add_script_ms(1, n_ms(time), ["set", "rotation", 90-10])
g.swim.add_script_ms(2, n_ms(time), ["set", "rotation", 180-10])
g.swim.add_script_ms(3, n_ms(time), ["set", "rotation", 270-10])
g.swim.add_script_ms(0, n_ms(time), ["set", "x", 160])
g.swim.add_script_ms(1, n_ms(time), ["set", "x", 160])
g.swim.add_script_ms(2, n_ms(time), ["set", "x", 160])
g.swim.add_script_ms(3, n_ms(time), ["set", "x", 160])
g.swim.add_script_ms(0, n_ms(time), ["set", "y", 90])
g.swim.add_script_ms(1, n_ms(time), ["set", "y", 90])
g.swim.add_script_ms(2, n_ms(time), ["set", "y", 90])
g.swim.add_script_ms(3, n_ms(time), ["set", "y", 90])
g.swim.add_script_ms(0, n_ms(time), ["bg", "set", "alpha", 0.25])
g.swim.add_script_ms(1, n_ms(time), ["bg", "set", "alpha", 0.25])
g.swim.add_script_ms(2, n_ms(time), ["bg", "set", "alpha", 0.25])
g.swim.add_script_ms(3, n_ms(time), ["bg", "set", "alpha", 0.25])
g.swim.add_script_ms(0, n_ms(time), ["key", "set", "alpha", 0.25])
g.swim.add_script_ms(1, n_ms(time), ["key", "set", "alpha", 0.25])
g.swim.add_script_ms(2, n_ms(time), ["key", "set", "alpha", 0.25])
g.swim.add_script_ms(3, n_ms(time), ["key", "set", "alpha", 0.25])
g.swim.add_script_ms(0, n_ms(time), ["bg", "set", "y", 10])
g.swim.add_script_ms(1, n_ms(time), ["bg", "set", "y", 10])
g.swim.add_script_ms(2, n_ms(time), ["bg", "set", "y", 10])
g.swim.add_script_ms(3, n_ms(time), ["bg", "set", "y", 10])
g.swim.add_script_ms(4, n_ms(time), ["speed", 110])
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.2), ["add", "alpha", 0.05])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.2), ["add", "alpha", 0.05])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.2), ["add", "alpha", 0.05])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.2), ["add", "alpha", 0.05])
}
for (let i = 0; i <= 1; i += 0.01) {
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(14), ["add", "rotation", 0.2])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(14), ["add", "rotation", 0.2])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(14), ["add", "rotation", 0.2])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(14), ["add", "rotation", 0.2])
}
time += 0.5
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 0.5
g.swim.add_note(3, time, false, 1, true)
time += 0.5
g.swim.add_note(0, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 0.5
g.swim.add_note(2, time, false, 1, true)
time += 0.5
g.swim.add_note(1, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
g.swim.add_note(3, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
g.swim.add_note(2, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 0.5
g.swim.add_note(0, time, false, 1, true)
time += 0.5
g.swim.add_note(2, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
g.swim.add_note(2, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
g.swim.add_note(1, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 0.5
g.swim.add_note(3, time, false, 1, true)
time += 0.25
g.swim.add_note(1, time, false, 1, true)
time += 0.25
g.swim.add_note(3, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
g.swim.add_note(0, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleX", (9-i)/8])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["bg", "set", "alpha", 0.35-i/10])
}
time += 1
g.swim.add_note(2, time, false, 1, true)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.75), ["add", "scaleX", i/16])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.75), ["add", "scaleX", i/16])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.75), ["add", "scaleX", i/16])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.75), ["add", "scaleX", i/16])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.75), ["add", "scaleY", i/16])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.75), ["add", "scaleY", i/16])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.75), ["add", "scaleY", i/16])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.75), ["add", "scaleY", i/16])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.75), ["add", "rotation", -0.5])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.75), ["add", "rotation", -5])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.75), ["add", "rotation", 8.5])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.75), ["add", "rotation", 4])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.75), ["add", "x", -3.6])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.75), ["add", "x", -1.2])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.75), ["add", "x", 3.6])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.75), ["add", "x", 1.2])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.75), ["add", "y", 3])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.75), ["add", "y", 3])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.75), ["add", "y", 3])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.75), ["add", "y", 3])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.75), ["bg", "add", "alpha", 0.0375])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.75), ["key", "add", "alpha", 0.0375])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.75), ["bg", "add", "alpha", 0.0375])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.75), ["key", "add", "alpha", 0.0375])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.75), ["bg", "add", "alpha", 0.0375])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.75), ["key", "add", "alpha", 0.0375])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.75), ["bg", "add", "alpha", 0.0375])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.75), ["key", "add", "alpha", 0.0375])
}
g.swim.add_script_ms(0, n_ms(time), ["bg", "set", "y", -160])
g.swim.add_script_ms(1, n_ms(time), ["bg", "set", "y", -160])
g.swim.add_script_ms(2, n_ms(time), ["bg", "set", "y", -160])
g.swim.add_script_ms(3, n_ms(time), ["bg", "set", "y", -160])
time += 1
g.swim.add_note(3, time, false, 1.5)
time += 0.5
g.swim.add_note(1, time, false, 1.5)
time += 0.5
g.swim.add_note(3, time, false, 1.5)
time += 0.25
g.swim.add_note(0, time, false, 1.5)
time += 0.25
g.swim.add_note(2, time, false, 1.5)
time += 0.25
g.swim.add_note(1, time, false, 1.5)
time += 0.25
g.swim.add_note(3, time, false, 1.5)
time += 0.5
g.swim.add_note(2, time, false, 1.5)
time += 0.5
g.swim.add_note(0, time, false, 1.5)
g.swim.add_script_ms(0, n_ms(time), ["bg", "set", "y", -150])
g.swim.add_script_ms(1, n_ms(time), ["bg", "set", "y", -150])
g.swim.add_script_ms(2, n_ms(time), ["bg", "set", "y", -150])
g.swim.add_script_ms(3, n_ms(time), ["bg", "set", "y", -150])
g.swim.add_script_ms(3, n_ms(time), ["set", "rotation", 0])
g.swim.add_script_ms(0, n_ms(time), ["set", "rotation", 0])
g.swim.add_script_ms(1, n_ms(time), ["set", "rotation", 0])
g.swim.add_script_ms(2, n_ms(time), ["set", "rotation", 0])
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["add", "scaleX", -i/16])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "scaleX", -i/16])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "scaleX", -i/16])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["add", "scaleX", -i/16])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["add", "scaleY", -i/16])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "scaleY", -i/16])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "scaleY", -i/16])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["add", "scaleY", -i/16])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["add", "x", 1.2])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["add", "x", 0.4])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["add", "x", -1.2])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["add", "x", -0.4])
	g.swim.add_script_ms(4, n_ms(time)+i*n_ms(0.5), ["speed", 110+i*50])
}
time += 0.5
g.swim.add_note(0, time, false, 1.25)
time += 0.5
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(2, time)
time += 0.5
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(0, time)
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(2, time)
time += 0.25
g.swim.add_note(1, time)
time += 0.25
g.swim.add_note(2, time)
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 0.5
g.swim.add_note(0, time)
time += 0.25
g.swim.add_note(3, time)
time += 0.25
g.swim.add_note(0, time)
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (9-i)/8])
}
time += 1
g.swim.add_note(2, time)
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 1
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(3, time)
time += 1/3
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(2, time)
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 1
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(3, time)
time += 1/3
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(3, time)
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 2/3
g.swim.add_note(0, time)
time += 2/3
g.swim.add_note(1, time)
time += 2/3
g.swim.add_note(3, time)
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 0.5
g.swim.add_note(1, time)
time += 1
g.swim.add_note(1, time)
time += 0.5
g.swim.add_note(2, time)
g.swim.add_note(3, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 1
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(3, time)
time += 1/3
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(2, time)
g.swim.add_note(1, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 1
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(3, time)
time += 1/3
g.swim.add_note(0, time)
time += 1/3
g.swim.add_note(3, time)
g.swim.add_note(2, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 2/3
g.swim.add_note(0, time)
time += 2/3
g.swim.add_note(3, time)
time += 2/3
g.swim.add_note(1, time)
g.swim.add_note(0, time)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(0.5), ["set", "scaleY", (5-i)/4])
}
time += 0.5
g.swim.add_note(1, time)
time += 1
g.swim.add_note(1, time, false, 0.7)
time += 1
g.swim.add_note(0, time, false, 0.7)
time += 0.5
g.swim.add_note(2, time, false, 0.7)
time += 0.5
g.swim.add_note(1, time, false, 0.7)
time += 0.5
g.swim.add_note(3, time, false, 0.7)
time += 1
g.swim.add_note(3, time, false, 0.7)
time += 1
g.swim.add_note(1, time, false, 0.7)
time += 0.5
g.swim.add_note(2, time, false, 0.7)
time += 0.5
g.swim.add_note(1, time, false, 0.7)
time += 1
g.swim.add_note(3, time, false, 0.7)
g.swim.add_note(0, time, false, 0.7)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(1), ["add", "alpha", -0.05])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(1), ["add", "rotation", -i])
	g.swim.add_script_ms(3, n_ms(time)+i*n_ms(1), ["add", "y", i])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(1), ["add", "alpha", -0.05])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(1), ["add", "rotation", i])
	g.swim.add_script_ms(0, n_ms(time)+i*n_ms(1), ["add", "y", i])
}
time += 1
g.swim.add_note(2, time, false, 0.7)
g.swim.add_note(1, time, false, 0.7)
for (let i = 0; i <= 1; i += 0.05) {
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(1), ["add", "alpha", -0.05])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(1), ["add", "rotation", -i])
	g.swim.add_script_ms(2, n_ms(time)+i*n_ms(1), ["add", "y", i])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(1), ["add", "alpha", -0.05])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(1), ["add", "rotation", i])
	g.swim.add_script_ms(1, n_ms(time)+i*n_ms(1), ["add", "y", i])
}





console.log("Mod built!")