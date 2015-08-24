(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.testData = factory();
  }
})(this, function () {
  return function (rdf) {

    var cardGraph = function () {
      var graph = rdf.createGraph();

      var cardNode = rdf.createNamedNode('https://www.example.com/john/card#me');

      graph.add(rdf.createTriple(
        cardNode,
        rdf.createNamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
        rdf.createNamedNode('http://xmlns.com/foaf/0.1/Person')));

      graph.add(rdf.createTriple(
        cardNode,
        rdf.createNamedNode('http://xmlns.com/foaf/0.1/name'),
        rdf.createLiteral('John Smith', 'en')));

      var keyNode = rdf.createBlankNode();

      graph.add(rdf.createTriple(
        cardNode,
        rdf.createNamedNode('http://www.w3.org/ns/auth/cert#key'),
        keyNode));

      graph.add(rdf.createTriple(
        keyNode,
        rdf.createNamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
        rdf.createNamedNode('http://www.w3.org/ns/auth/cert#RSAPublicKey')));

      graph.add(rdf.createTriple(
        keyNode,
        rdf.createNamedNode('http://www.w3.org/ns/auth/cert#exponent'),
        rdf.createLiteral('65537', null, rdf.createNamedNode('http://www.w3.org/2001/XMLSchema#integer'))));

      graph.add(rdf.createTriple(
        keyNode,
        rdf.createNamedNode('http://www.w3.org/ns/auth/cert#modulus'),
        rdf.createLiteral('abcdef', null, rdf.createNamedNode('http://www.w3.org/2001/XMLSchema#hexBinary'))));

      return graph;
    };


    var listGraph = function () {
      var graph = rdf.createGraph();
      var root = rdf.createBlankNode();
      var item1 = rdf.createBlankNode();
      var item2 = rdf.createBlankNode();
      var list1 = rdf.createBlankNode();
      var list2 = rdf.createBlankNode();

      graph.add(rdf.createTriple(
        root,
        rdf.createNamedNode('http://example.org/orderedItems'),
        list1
      ));

      graph.add(rdf.createTriple(
        item1,
        rdf.createNamedNode('http://example.org/text'),
        rdf.createLiteral('1')
      ));

      graph.add(rdf.createTriple(
        item2,
        rdf.createNamedNode('http://example.org/text'),
        rdf.createLiteral('2')
      ));

      graph.add(rdf.createTriple(
        list1,
        rdf.createNamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#first'),
        item1
      ));

      graph.add(rdf.createTriple(
        list1,
        rdf.createNamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'),
        list2
      ));

      graph.add(rdf.createTriple(
        list2,
        rdf.createNamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#first'),
        item2
      ));

      graph.add(rdf.createTriple(
        list2,
        rdf.createNamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'),
        rdf.createNamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#nil')
      ));

      return graph;
    };


    return {
      cardGraph: cardGraph(),
      listGraph: listGraph()
    };
  };
});