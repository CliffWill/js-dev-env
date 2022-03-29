// This file isnt transpiled, so must use CommonJS and ESS

// Register bable to transpile before our test run
require('@babel/register')();

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
