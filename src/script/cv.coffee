# For Edward Cheng's CV

global_string = 'haha'

(() ->
  global = {}
  transition =
    r: 64
    rv: 1
    g: 64
    gv: 1
    b: 64
    bv: 1
  Polymer 'cv-serv-global', {
      ready: () ->
        @global = global
        @global.data = ''

        toColor = (r, g, b) ->
          return 'rgb(' + [r, g, b].join(',') + ')'

        window.setInterval(
          () ->
            if transition.r > 192
              transition.rv = -1
            if transition.r < 65
              transition.rv = 1
            transition.r += transition.rv
            global.data = toColor(transition.r, transition.g, transition.b)
          15
        )
        window.setInterval(
          () ->
            if transition.g > 192
              transition.gv = -1
            if transition.g < 65
              transition.gv = 1
            transition.g += transition.gv
            global.data = toColor(transition.r, transition.g, transition.b)
          30
        )
        window.setInterval(
          () ->
            if transition.b > 192
              transition.bv = -1
            if transition.b < 65
              transition.bv = 1
            transition.b += transition.bv
            global.data = toColor(transition.r, transition.g, transition.b)
          45
        )
    }
  )()

Polymer 'cv-input', {
    ready: () ->
      @global = @$['serv-global'].global
  }

Polymer 'cv-show', {
    ready: () ->
      @global = @$['serv-global'].global
  }

Polymer 'cv-awesome', {
    ready: () ->
      @global = @$['serv-global'].global
  }