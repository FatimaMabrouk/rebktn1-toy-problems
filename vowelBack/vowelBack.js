var _base = {"a": "v", "b": "k", "c": "b", "d": "a", "e": "a", "f": "f", "g": "p",
             "h": "q", "i": "i", "j": "s", "k": "t", "l": "u", "m": "v", "n": "w",
             "o": "n", "p": "y", "q": "z", "r": "a", "s": "b", "t": "t", "u": "p",
             "v": "v", "w": "f", "x": "g","y": "h", "z": "i"};
             
var  vowelBack = (s) => s.replace(/[a-z]/g, function(a){ return _base[a]; });