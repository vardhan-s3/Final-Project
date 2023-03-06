const Player = require('../models/player');
 
// Get all players
exports.getAllPlayers = function(req, res) {
  Player.find(function(err, players) {
    if (err) {
      res.send(err);
    } else {
      res.json(players);
    }
  });
};
 
// Get player by country
exports.getPlayerByCountry = function(req, res) {
  Player.find({ country: req.params.country }, function(err, players) {
    if (err) {
      res.send(err);
    } else {
      res.json(players);
    }
  });
};
 
// Create player
exports.createPlayer = function(req, res) {
  const player = new Player(req.body);
 
  player.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Player created successfully' });
    }
  });
};
 
// Update player
exports.updatePlayer = function(req, res) {
  Player.findByIdAndUpdate(req.params.id, req.body, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Player updated successfully' });
    }
  });
};
 
// Delete player
exports.deletePlayer = function(req, res) {
  Player.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Player deleted successfully' });
    }
  });
};
