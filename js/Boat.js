class Boat {
  constructor(x, y, width, height, boatPos, ) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      label: "boat"
    };
    // passo 5: adicione o novo parâmetro
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }
  // passo 6: crie a função para definir a velocidade

   remove(index) {
      Matter.World.remove(world, boats[index].body);
      boats.splice(index, 1);
    
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    // passo 7: crie a variavel do conjunto de animações

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    // passo 8: carregue a imagem passando os parâmetros
    noTint();
    pop();
  }
}
