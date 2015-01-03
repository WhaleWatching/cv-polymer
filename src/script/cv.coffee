# For Edward Cheng's CV

global_string = 'haha'

Polymer 'cv-input', {
    local_string: global_string
    observe:
      local_string: 'local_stringChange'
    local_stringChange: (oldValue, newValue) ->
      console.log global_string
      global_string = newValue
  }

Polymer 'cv-show', {
    local_string: global_string
    observe:
      local_string: 'local_stringChange'
    local_stringChange: (oldValue, newValue) ->
      global_string = newValue
  }
