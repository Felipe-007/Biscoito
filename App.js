import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)  //conta quantas frases existem

    this.setState({
      textoFrase: this.frases[numeroAleatorio],  //apresenta a frase aleatoria
      img: require('./src/biscoitoAberto.png'),  //altera a imagem
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imagem}
          source={this.state.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={ this.quebraBiscoito }>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default App;