g={
	swim: {
		bpm: 170,
		chart: disco,
		song: "disco",
		song1: "disco",
		song2: "ballad",
		song3: "rock",
		songdata: function(songid){
			g.swim.song = songid
			g.swim.chart = window[songid].chart
			if (!g.swim.chart[0]) {
				window[g.swim.song].chart = [{type: 10, time: 1000}]
			} else {
				window[g.swim.song].chart = g.swim.chart.concat([{type: 10, time: g.swim.chart[g.swim.chart.length-1].time+1000}])
			}
		},
		clear: function() {
			g.swim.chart = [];
			window[g.swim.song].chart = [{type: 10, time: 1000}]
		},
		speed: function(p) {
			window[g.swim.song].speed = p
		},
		add_note: function(p_type, p_time, p_bad=false, p_speed=1, p_norotate=false) {
			g.swim.add_note_adv({type: p_type, time: n_ms(p_time), speed: p_speed, bad: p_bad, norotate: p_norotate})
		},
		add_note_ms: function(p_type, p_time, p_bad=false, p_speed=1, p_norotate=false) {
			g.swim.add_note_adv({type: p_type, time: p_time, speed: p_speed, bad: p_bad, norotate: p_norotate})
		},
		add_script: function(p_type, p_time, p_action) {
			g.swim.add_note_adv({type: p_type, time: n_ms(p_time)+2000, action: p_action})
		},
		add_script_ms: function(p_type, p_time, p_action) {
			g.swim.add_note_adv({type: p_type, time: p_time+2000, action: p_action})
		},
		add_note_adv: function(note_obj) {
			if (!typeof(note_obj) == 'object') throw("The parameter must be an object")
			g.swim.chart = [note_obj].concat(g.swim.chart)
			g.swim.chart.sort((a, b) => (a.time > b.time) ? 1 : -1)
			window[g.swim.song].chart = g.swim.chart.concat([{type: 10, time: g.swim.chart[g.swim.chart.length-1].time+1000}])
		},
		text: function (perfect, good, miss, adv) {
			if (!adv) ju = new Map([[-5, {
				text: miss,
				color: "#f01d1d",
				outline: "#6e0505",
				scale: 1.2
			}], [-50, {
				text: miss,
				color: "#f01d1d",
				outline: "#6e0505",
				scale: 1.2
			}], [50, {
				text: good,
				color: "#ffd500",
				outline: "#965000",
				scale: 1.4
			}], [100, {
				text: perfect,
				color: "#0bd60b",
				outline: "#055e05",
				scale: 1.5
			}]])
			if (adv) ou = new Map([[-5, miss], [-50, miss], [50, good], [100, perfect]])
		}
	},
	skate: {
		add_trick: function(id, name, score, key_combo, player_frame, frame_duration) {
			Jt = [{
				name: id,
				ig: score,
				multiplier: 1,
				text: name,
				frame: player_frame,
				actions: key_combo,
				duration: frame_duration
			}].concat(Pt)
		},
		remove_trick: function(id) {
			Pt.splice(Pt.findIndex(function(a){return a.name == id}),1)
		},
		clear: function() {
			Pt=[Yj]
		},
		reset: function(){
			Pt=[Yj,{name:"kickFlip",ig:200,multiplier:1,text:"Kick Flip",frame:"kick_flip_e",actions:["e","action"],duration:15},{name:"kickFlip",ig:200,multiplier:1,text:"Kick Flip",frame:"kick_flip_w",actions:["w","action"],duration:15},{name:"barrelRoll",ig:300,multiplier:1,text:"Barrel Roll",frame:"barrel_roll_e",actions:["w","n","action"],duration:24},{name:"barrelRoll",ig:300,multiplier:1,text:"Barrel Roll",frame:"barrel_roll_w",actions:["e","n","action"],duration:24},{name:"bsOneEighty",ig:300,multiplier:1,text:"BS 180",frame:null,actions:["e","n","w"],duration:1},{name:"bsOneEighty",ig:300,multiplier:1,text:"BS 180",frame:null,actions:["w","n","e"],duration:1},{name:"fsOneEighty",ig:300,multiplier:1,text:"FS 180",frame:null,actions:["e","s","w"],duration:1},{name:"fsOneEighty",ig:300,multiplier:1,text:"FS 180",frame:null,actions:["w","s","e"],duration:1},{name:"headstandTrick",ig:500,multiplier:1,text:"Headstand",frame:"super_trick",actions:["s","w","n","action"],duration:35},{name:"headstandTrick",ig:500,multiplier:1,text:"Headstand",frame:"super_trick",actions:["s","e","n","action"],duration:35},{name:"helicopterTrick",ig:500,multiplier:1,text:"Helicopter",frame:"helicopter",actions:["e","w","e","action"],duration:35},{name:"helicopterTrick",ig:500,multiplier:1,text:"Helicopter",frame:"helicopter",actions:["w","e","w","action"],duration:35}]
		}
	},
	archery: {},
	climb: {},
	tennis: {},
	rugby: {},
	marathon: {},
	overworld: {},
	dialouge: {
		d: Yk.get("kappasameteam"),
		set_text: function(id, value) {
			g.dialouge.d = Yk.get(id)
			g.dialouge.d.ha = value
			g.dialouge.d.text = value
			Yk.set(id, g.dialouge.d)
		},
		set_speaker: function(id, value) {
			g.dialouge.d = Yk.get(id)
			g.dialouge.d.tags.W[0] = value
			Yk.set(id, g.dialouge.d)
		}
	},
	help: function() {
		clear()
		console.warn("---------------- ARTISTIC SWIMMING ----------------")
		console.log("g.swim.bpm = 60")
		console.log("	sets the auto bpm calculation for add_note to 60, can change this to any value")
		console.log("g.swim.add_note(type, time)")
		console.log("	adds a note to the base artistic swimming minigame with a set time to come on screen in quarter notes, for example 4 is a whole note, 0.25 is a sixteenth note, ect.")
		console.log("g.swim.add_note_ms(type, time)")
		console.log("	adds a note to the base artistic swimming minigame with a set time to come on screen in milliseconds")
		console.log("		note type: 0 = up, 1 = left, 2 = down, 3 = right")
		console.log("g.swim.clear()")
		console.log("	removes all notes from the base artistic swimming minigame")
		console.log("g.swim.text(perfect, good, miss)")
		console.log("	sets the text to appear when you hit a perfect note, a good note, and a missed note, with each parameter being a string")
		console.log("	adding an extra parameter to the end with the value true will change this command as follows:")
		console.log("	sets the text to appear on a perfect, good, and missed note with each parameter being a javascript object. the default format is as below:")
		console.log("	{text: \"miss\", color: \"#f01d1d\", outline: \"#6e0505\", scale: 1.2}")
		console.log("")
		console.warn("------------------ SKATEBOARDING ------------------")
		console.log("g.skate.add_trick(id, name, score, key_combo, player_frame, frame_duration)")
		console.log("	adds a new trick to the skateboarding minigame")
		console.log("g.skate.remove_trick(id)")
		console.log("	removes a trick from the skateboarding minigame")
		console.log("g.skate.clear()")
		console.log("	clears all tricks from the skateboarding minigame, the game may fall back to reverting all defaults to a nose-grab")
		console.log("g.skate.reset()")
		console.log("	resets the skateboarding tricks to defaults")
		console.log("")
		console.warn("-------------------- DIALOUGE ---------------------")
		console.log("TIP: each time you open a dialouge in-game, the console will log the id and speaker of that dialouge")
		console.log("g.dialouge.set_text(dialouge_id, text)")
		console.log("	sets the text displayed on the dialouge box under the specified id")
		console.log("g.dialouge.set_speaker(dialouge_id, speaker_id)")
		console.log("	removes a trick from the skateboarding minigame")
		console.log("g.skate.clear()")
		console.log("	clears all tricks from the skateboarding minigame, the game may fall back to reverting all defaults to a nose-grab")
		console.log("g.skate.reset()")
		console.log("	resets the skateboarding tricks to defaults")
	}
}
function n_ms(p) {
	return p*(60000/g.swim.bpm)
}
loadJS("mod.js")