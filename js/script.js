// to do:
// make animation cut short when key is released
// make diagonal idle easier to achieve

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var arrows;
var dsprite;
var direction;
var shift;


function preload() {
    game.load.image('ground', 'assets/sky.png');
    // game.load.spritesheet('drowzee', 'assets/drowzee_sst.png', 25.6, 24.5, 24);
    game.load.atlas('drowzee', 'assets/drowzee-sst.png', 'assets/drowzee-sst.json');
}

function create() {
	dsprite = game.add.sprite(40, 100, 'drowzee');

	dsprite.scale.setTo(1.5, 1.5);

	// dsprite.animations.add('walk');

	dsprite.animations.add("down_idle", ["down_idle.png"]);
	dsprite.animations.add("up_idle", ["up_idle.png"]);
	dsprite.animations.add("left_idle", ["left_idle.png"]);
	dsprite.animations.add("right_idle", ["right_idle.png"]);
	dsprite.animations.add("downleft_idle", ["downleft_idle.png"]);
	dsprite.animations.add("downright_idle", ["downright_idle.png"]);
	dsprite.animations.add("upleft_idle", ["upleft_idle.png"]);
	dsprite.animations.add("upright_idle", ["upright_idle.png"]);	

	dsprite.animations.add("left", ["left_move1.png", "left_idle.png", "left_move2.png", "left_idle.png"], 9, false);
	dsprite.animations.add("right", ["right_move1.png", "right_idle.png", "right_move2.png", "right_idle.png"], 9, false);
	dsprite.animations.add("up", ["up_move1.png", "up_idle.png", "up_move2.png", "up_idle.png"], 9, false);
	dsprite.animations.add("down", ["down_move1.png", "down_idle.png", "down_move2.png", "down_idle.png"], 9, false);
	dsprite.animations.add("upright", ["upright_move1.png", "upright_move2.png", "upright_idle.png"], 9, false);
	dsprite.animations.add("upleft", ["upleft_move1.png", "upleft_move2.png", "upleft_idle.png"], 9, false);
	dsprite.animations.add("downleft", ["downleft_move1.png", "downleft_move2.png", "downleft_idle.png"], 9, false);
	dsprite.animations.add("downright", ["downright_move1.png", "downright_move2.png", "downright_idle.png"], 9, false);

	dsprite.animations.add("left_sprint", ["left_move1.png", "left_idle.png", "left_move2.png", "left_idle.png"], 15, false);
	dsprite.animations.add("right_sprint", ["right_move1.png", "right_idle.png", "right_move2.png", "right_idle.png"], 15, false);
	dsprite.animations.add("up_sprint", ["up_move1.png", "up_idle.png", "up_move2.png", "up_idle.png"], 15, false);
	dsprite.animations.add("down_sprint", ["down_move1.png", "down_idle.png", "down_move2.png", "down_idle.png"], 15, false);
	dsprite.animations.add("upright_sprint", ["upright_move1.png", "upright_move2.png", "upright_idle.png"], 15, false);
	dsprite.animations.add("upleft_sprint", ["upleft_move1.png", "upleft_move2.png", "upleft_idle.png"], 15, false);
	dsprite.animations.add("downleft_sprint", ["downleft_move1.png", "downleft_move2.png", "downleft_idle.png"], 15, false);
	dsprite.animations.add("downright_sprint", ["downright_move1.png", "downright_move2.png", "downright_idle.png"], 15, false);

	// game.add.tween(dsprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

	//initialize game control object
	arrows = game.input.keyboard.createCursorKeys();
	shift = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
}

function update() {
	if (shift.isDown) {
		sprint();
	} else {
		walk();
	}
}

function walk() {
	if (arrows.right.isDown && arrows.up.isDown) {
		dsprite.x += .7;
		dsprite.y -= .7;
		dsprite.animations.play("upright");
		direction = "upright";
    } else if (arrows.right.isDown && arrows.down.isDown) {
		dsprite.x += .7;
		dsprite.y += .7;
		dsprite.animations.play("downright");
		direction = "downright";
    } else if (arrows.left.isDown && arrows.down.isDown) {
		dsprite.x -= .7;
		dsprite.y += .7;
		dsprite.animations.play("downleft");
		direction = "downleft";
    } else if (arrows.left.isDown && arrows.up.isDown) {
		dsprite.x -= .7;
		dsprite.y -= .7;
		dsprite.animations.play("upleft");
		direction = "upleft";
    } else if (arrows.right.isDown) {
		dsprite.x++;
		dsprite.animations.play("right");
		direction = "right";
    } else if (arrows.up.isDown) {
		dsprite.y--;
		dsprite.animations.play("up");
		direction = "up";
    } else if (arrows.down.isDown) {
		dsprite.y++;
		dsprite.animations.play("down");
		direction = "down";
    } else if (arrows.left.isDown) {
		dsprite.x--;
		dsprite.animations.play("left");
		direction = "left";
	} else {
		idle(direction);
	}
}

function sprint(direction) {
	if (arrows.right.isDown && arrows.up.isDown) {
		dsprite.x += 1.4;
		dsprite.y -= 1.4;
		dsprite.animations.play("upright_sprint");
		direction = "upright";
    } else if (arrows.right.isDown && arrows.down.isDown) {
		dsprite.x += 1.4;
		dsprite.y += 1.4;
		dsprite.animations.play("downright_sprint");
		direction = "downright";
    } else if (arrows.left.isDown && arrows.down.isDown) {
		dsprite.x -= 1.4;
		dsprite.y += 1.4;
		dsprite.animations.play("downleft_sprint");
		direction = "downleft";
    } else if (arrows.left.isDown && arrows.up.isDown) {
		dsprite.x -= 1.4;
		dsprite.y -= 1.4;
		dsprite.animations.play("upleft_sprint");
		direction = "upleft";
    } else if (arrows.right.isDown) {
		dsprite.x += 2;
		dsprite.animations.play("right_sprint");
		direction = "right";
    } else if (arrows.up.isDown) {
		dsprite.y -= 2;
		dsprite.animations.play("up_sprint");
		direction = "up";
    } else if (arrows.down.isDown) {
		dsprite.y += 2;
		dsprite.animations.play("down_sprint");
		direction = "down";
    } else if (arrows.left.isDown) {
		dsprite.x -= 2;
		dsprite.animations.play("left_sprint");
		direction = "left";
	} else {
		idle(direction);
	}
}

function idle(direction) {
	if (direction == "upleft") {
		dsprite.animations.play("upleft_idle");
	} else if (direction == "upright") {
		dsprite.animations.play("upright_idle");
	} else if (direction == "downright") {
		dsprite.animations.play("downright_idle");
	} else if (direction == "downleft") {
		dsprite.animations.play("downleft_idle");
	} else if (direction == "right") {
		dsprite.animations.play("right_idle");
	} else if (direction == "left") {
		dsprite.animations.play("left_idle");
	} else if (direction == "up") {
		dsprite.animations.play("up_idle");
	} else if (direction == "down") {
		dsprite.animations.play("down_idle");
	}
}
