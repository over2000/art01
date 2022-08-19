jQuery(function ($) {
    var $table = $('<table>')

    $table.append('<caption>≋G≋R≋4≋F≋I≋C≋O≋S≋</caption>')

    $table

      .append('<thead>')
      .children('thead')
      .append('<tr />')
      .children('tr')

    var $tbody = $table.append('<tbody />').children('tbody')

    //fix this loop
    
    $tbody.append('<tr />').children('tr:last')
      for (i = 0; i < 50; i++) {
        $tbody.append(`<td id="character${i}">▓</td>`)
    }

    $tbody.append('<tr />').children('tr:last')

    for (i = 50; i < 100; i++) {
        $tbody.append(`<td id="character${i}">▒</td>`)
    }
    
    $tbody.append('<tr />').children('tr:last')

    for (i = 100; i < 150; i++) {
        $tbody.append(`<td id="character${i}">▒</td>`)
    }

    $tbody.append('<tr />').children('tr:last')
      for (i = 150; i < 200; i++) {
        $tbody.append(`<td id="character${i}">▒</td>`)
    }

    $tbody.append('<tr />').children('tr:last')

    for (i = 200; i < 250; i++) {
        $tbody.append(`<td id="character${i}">░</td>`)
    }
    
    $tbody.append('<tr />').children('tr:last')

    for (i = 250; i < 300; i++) {
        $tbody.append(`<td id="character${i}">░</td>`)
    }

    $tbody.append('<tr />').children('tr:last')
      for (i = 300; i < 350; i++) {
        $tbody.append(`<td id="character${i}">░</td>`)
    }

    $tbody.append('<tr />').children('tr:last')

    for (i = 350; i < 400; i++) {
        $tbody.append(`<td id="character${i}">░</td>`)
    }
    
    $tbody.append('<tr />').children('tr:last')

    for (i = 400; i < 450; i++) {
        $tbody.append(`<td id="character${i}">▒</td>`)
    }

    $tbody.append('<tr />').children('tr:last')
      for (i = 500; i < 550; i++) {
        $tbody.append(`<td id="character${i}">▒</td>`)
    }

    $tbody.append('<tr />').children('tr:last')

    for (i = 550; i < 600; i++) {
        $tbody.append(`<td id="character${i}">▒</td>`)
    }
    
    $tbody.append('<tr />').children('tr:last')

    for (i = 600; i < 650; i++) {
        $tbody.append(`<td id="character${i}">▓</td>`)
    }

    $table.appendTo('#dynamicTable')

    var characters = '▓▒░'

    function changeCharacter() {
      for (i = 0; i < 650; i++) {
        var randomIndex = Math.floor(characters.length * Math.random())
        var randomCharacter = characters[randomIndex]
        $(`#character${i}`).text(randomCharacter)
      }
    }
    for (i = 0; i < 500; i++) {
      $(`#character${i}`).mouseenter(changeCharacter)
      $(`#character${i}`).mouseleave(changeCharacter)
    }
  })
