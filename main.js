const fs = require('fs');
const io = require('socket.io');




function matchstart(context, events, done){
  
  context.vars['userId'] = "grape";

  return done();
}

const setParam = (context, events, done) => {
  context.vars['id'] = 'grape'; // id라는 값에 파라미터 설정

  return done(); // 콜백
}

exports.matchstart = matchstart;
exports.setParam = setParam;