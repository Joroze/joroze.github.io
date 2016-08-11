

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('ship', 'sprites/thrust_ship2.png');
    game.load.image('bullet', 'misc/bullet0.png');
    
    game.load.image('car', 'sprites/tinycar.png')
    
    game.load.audio('blaster', 'audio/SoundEffects/blaster.mp3');

}

var player;
var bullets;

var cursors;
var fireButton;

var bulletTime = 0;
var bullet;
var bulletSound

function create() {
    bulletSound = game.add.sound('blaster', .5 /* volume */, false /* loop */);
    bullets = game.add.physicsGroup();



    bullets.createMultiple(2, 'bullet', false);

    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);


    player = game.add.sprite(50, 600/2, 'car');



    
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

function update () {

    player.body.velocity.y = 0;
    player.body.velocity.x = 0;

    if (cursors.up.isDown)
    {
        player.angle = 0;
        player.body.velocity.y = -600;
    }
    else if (cursors.down.isDown)
    {
        player.angle = 180;
        player.body.velocity.y = +600;
    }
    
    else if (cursors.left.isDown)
    {
        player.angle = 0;        
        player.body.velocity.x = -600;
    }
    
    else if (cursors.right.isDown)
    {
        player.angle = 0;        
        player.body.velocity.x = +600;
    }

    if (fireButton.isDown)
    {
        fireBullet();
    }

}

function fireBullet () {

    if (game.time.time > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bulletSound.play()
            bullet.angle=90;
            bullet.reset(player.x + 20, player.y + 7);
            bullet.body.velocity.x = +600;
            bulletTime = game.time.time + 100;
        }
    }

}

function render () {

}
