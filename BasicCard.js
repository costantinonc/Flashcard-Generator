function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

module.exports = BasicCard;

var question1 = new BasicCard("what", "dog");

console.log(question1.front);


