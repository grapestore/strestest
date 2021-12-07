const io = require('socket.io-client');
const Faker = require('faker');

'use strict';

const setMan = (context, events, done) => {
  const gender = "0";
  const id = Faker.name.findName();
  const socket = io('http://3.38.143.25:8000/room');
  socket.emit('matchstart', {
    userId: `man${id}`,
    nickname: `man${id}`,
    gender: `${gender}`
  })

  return done(); // 콜백
}

const setWoman = (context, events, done) => {
  const gender = "1"
  const socket = io('http://3.38.143.25:8000/room');
  const id = Faker.name.findName();
  socket.emit('matchstart', {
    userId: `woman${id}`,
    nickname: `woman${id}`,
    gender: `${gender}`
  })
  return done(); // 콜백
}

exports.setMan = setMan;
exports.setWoman = setWoman;
