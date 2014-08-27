//This file exposes ifvisible so that it works with Meteor >0.6.5's package system.
if (typeof Package !== "undefined") {
  ifvisible = this.ifvisible;
}
