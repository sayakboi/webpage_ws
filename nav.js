var ros = new ROSLIB.Ros({
  url: 'ws://192.168.1.12:9090'
});
function connect() {
  ros.connect('ws://192.168.1.12:9090');
}
ros.on('connection', function(){
console.log('Connected to websocket server');
});

ros.on('error', function(error){
console.log('error connecting to websocket server');
setTimeout(connect, 1000);
});

ros.on('close', function(){
console.log('Connection to websocket server closed');
setTimeout(connect, 1000);
});

connect();
// Publish a topic
var cmdVel = new ROSLIB.Topic({
  ros : ros,
  name : '/Diff_Drive/diff_drive_controller/cmd_vel',
  messageType : 'geometry_msgs/Twist'
});
//directional twist
var fortwist = new ROSLIB.Message({
  linear : {
    x : 1,
    y : 0,
    z : 0
  },
  angular : {
    x : 0,
    y : 0,
    z : 0
  }
});
var leftwist = new ROSLIB.Message({
  linear : {
    x : 0,
    y : 0,
    z : 0
  },
  angular : {
    x : 0,
    y : 0,
    z : 1
  }
});
var rigtwist = new ROSLIB.Message({
  linear : {
    x : 0,
    y : 0,
    z : 0
  },
  angular : {
    x : 0,
    y : 0,
    z : -1
  }
});
var bactwist = new ROSLIB.Message({
  linear : {
    x : -1,
    y : 0,
    z : 0
  },
  angular : {
    x : 0,
    y : 0,
    z : 0
  }
});

//functions for buttons
function fordrive(){cmdVel.publish(fortwist);}
function bacdrive(){cmdVel.publish(bactwist);}
function lefdrive(){cmdVel.publish(leftwist);}
function rigdrive(){cmdVel.publish(rigtwist);}
