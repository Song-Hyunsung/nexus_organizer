const express = require('express');
const models = require('../models');
const router = express.Router();

const Player = models.Player;

router.get('/', (req, res) => {
	Player.findAll({
		where: {},
		truncate: true,
	}).then((players) => {
		res.json({
			players
		})
	}).catch(() => {
		res.status(400);
	})
})

router.post('/', (req, res) => {
	Player.create({
		playerName: req.body.playerName,
		tier: req.body.tier,
		positionOne: req.body.positionOne,
		positionTwo: req.body.positionTwo,
		team: req.body.team,
	}).then((player) => {
		res.json({
			player
		})
	}).catch(() => {
		res.status(400);
	});
});

router.put('/', (req, res) => {
	Player.findById(req.body.id).then((player) => {
		player.update({
			playerName: req.body.playerName,
			tier: req.body.tier,
			positionOne: req.body.positionOne,
			positionTwo: req.body.positionTwo,
			team: req.body.team,
		}).then((updatedPlayer) => {
			res.json({
				updatedPlayer
			})
		}).catch(() => {
			res.status(400);
		})
	}).catch(() => {
		res.status(400);
	})
})

router.delete('/', (req, res) => {
	Player.destroy({
		where: {},
		truncate: true,
	}).then(() => {
		res.json({
			msg: "deleted",
		})
	}).catch(() => {
		res.status(400);
	})
})

module.exports = router;