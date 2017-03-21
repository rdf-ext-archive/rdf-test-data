const rdf = require('rdf-ext')

function list () {
  let dataset = rdf.dataset()
  let root = rdf.blankNode()
  let item1 = rdf.blankNode()
  let item2 = rdf.blankNode()
  let list1 = rdf.blankNode()
  let list2 = rdf.blankNode()

  dataset.add(rdf.quad(
    root,
    rdf.namedNode('http://example.org/orderedItems'),
    list1))

  dataset.add(rdf.quad(
    item1,
    rdf.namedNode('http://example.org/text'),
    rdf.literal('1')))

  dataset.add(rdf.quad(
    item2,
    rdf.namedNode('http://example.org/text'),
    rdf.literal('2')))

  dataset.add(rdf.quad(
    list1,
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#first'),
    item1))

  dataset.add(rdf.quad(
    list1,
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'),
    list2))

  dataset.add(rdf.quad(
    list2,
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#first'),
    item2))

  dataset.add(rdf.quad(
    list2,
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'),
    rdf.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#nil')))

  return dataset
}

module.exports = list()

