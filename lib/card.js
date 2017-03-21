const rdf = require('rdf-ext')

function card () {
  let dataset = rdf.dataset()

  let cardNode = rdf.namedNode('https://www.example.com/john/card#me')

  dataset.add(rdf.quad(
    cardNode,
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    rdf.namedNode('http://xmlns.com/foaf/0.1/Person')))

  dataset.add(rdf.quad(
    cardNode,
    rdf.namedNode('http://xmlns.com/foaf/0.1/name'),
    rdf.literal('John Smith', 'en')))

  let keyNode = rdf.blankNode()

  dataset.add(rdf.quad(
    cardNode,
    rdf.namedNode('http://www.w3.org/ns/auth/cert#key'),
    keyNode))

  dataset.add(rdf.quad(
    keyNode,
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
    rdf.namedNode('http://www.w3.org/ns/auth/cert#RSAPublicKey')))

  dataset.add(rdf.quad(
    keyNode,
    rdf.namedNode('http://www.w3.org/ns/auth/cert#exponent'),
    rdf.literal('65537', 'http://www.w3.org/2001/XMLSchema#integer')))

  dataset.add(rdf.quad(
    keyNode,
    rdf.namedNode('http://www.w3.org/ns/auth/cert#modulus'),
    rdf.literal('abcdef', 'http://www.w3.org/2001/XMLSchema#hexBinary')))

  return dataset
}

module.exports = card()
