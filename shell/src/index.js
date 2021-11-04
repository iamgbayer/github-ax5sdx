// You can write your own logic here to determine the actual url
window.creatorsUrl = "http://localhost:3002";
window.membersUrl = "http://localhost:3004";

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
