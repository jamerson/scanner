var assert = require('chai').assert
var os = require('os');
var Scanner = require('../scanner')

describe('Scanner', function() {
  describe('ctor', function() {
    it('should create a new Scanner instance', function() {
      var scanner = Scanner('')
      assert.isNotNull(scanner)
      assert.isDefined(scanner)
    });
  });

  describe('nextInt', function() {
    it('should get the only integer value', function() {
      var scanner = Scanner('12')
      var result = scanner.nextInt()
      assert.strictEqual(result, 12)
    });
    it('should get the only integer value surrounded by blank spaces', function() {
      var scanner = Scanner(' 22 ')
      var result = scanner.nextInt()
      assert.strictEqual(result, 22)
    });
    it('should get the only integer value at the end of the string', function() {
      var scanner = Scanner(' 32')
      var result = scanner.nextInt()
      assert.strictEqual(result, 32)
    });
    it('should get the only integer value at the beginning of the string', function() {
      var scanner = Scanner(' 52')
      var result = scanner.nextInt()
      assert.strictEqual(result, 52)
    });
    it('should get the first integer value', function() {
      var scanner = Scanner('12 13')
      var result = scanner.nextInt()
      assert.strictEqual(result, 12)
    });
    it('should get the second integer value', function() {
      var scanner = Scanner('12 13')
      scanner.nextInt()
      var result = scanner.nextInt()
      assert.strictEqual(result, 13)
    });
    it('should get the two integers separated by new-line char', function() {
      var scanner = Scanner(`12 ${os.EOL} 13`)
      var result = scanner.nextInt()
      assert.strictEqual(result, 12)
      var result = scanner.nextInt()
      assert.strictEqual(result, 13)
    });
    it('should get the two integers surrounded by new-line chars', function() {
      var scanner = Scanner(`${os.EOL}12 ${os.EOL} 13${os.EOL} `)
      var result = scanner.nextInt()
      assert.strictEqual(result, 12)
      var result = scanner.nextInt()
      assert.strictEqual(result, 13)
    });

    it('passing empty string', function() {
      var scanner = Scanner('')
      var result = scanner.nextInt()
      assert.isUndefined(result)
    });

    it('passing string with blank-spaces only', function() {
      var scanner = Scanner('   ')
      var result = scanner.nextInt()
      assert.isUndefined(result)
    });

    it('passing string with blank-spaces and new-lines', function() {
      var scanner = Scanner(` ${os.EOL}  ${os.EOL}  `)
      var result = scanner.nextInt()
      assert.isUndefined(result)
    });
  });
  describe('hasNext', function() {
    it('passing empty string', function() {
      var scanner = Scanner('')
      var result = scanner.hasNext()
      assert.isFalse(result)
    });
    it('passing string with blank-spaces only', function() {
      var scanner = Scanner('   ')
      var result = scanner.hasNext()
      assert.isFalse(result)
    });
    it('passing string with blank-spaces and new-lines', function() {
      var scanner = Scanner(` ${os.EOL}  ${os.EOL}  `)
      var result = scanner.hasNext()
      assert.isFalse(result)
    });
    it('string with one integer', function() {
      var scanner = Scanner('12')
      var result = scanner.hasNext()
      assert.isTrue(result)
    });
    it('should get the two integers surrounded by new-line chars', function() {
      var scanner = Scanner(`${os.EOL}12 ${os.EOL} 13${os.EOL} `)
      var result = scanner.hasNext()
      assert.isTrue(result)
      scanner.nextInt()
      result = scanner.hasNext()
      assert.isTrue(result)
      scanner.nextInt()
      result = scanner.hasNext()
      assert.isFalse(result)
    });
  });
  describe('hasNextBoolean', function() {
    
  });
  describe('hasNextFloat', function() {
    
  });
  describe('hasNextNumber', function() {
    
  });
  describe('hasNextString', function() {

  });

  describe('nextFloat', function() {
    it('should get the only float value', function() {
      var scanner = Scanner('12.1')
      var result = scanner.nextFloat()
      assert.strictEqual(result, 12.1)
    });
    it('should get the only float value surrounded by blank spaces', function() {
      var scanner = Scanner(' 22.1 ')
      var result = scanner.nextFloat()
      assert.strictEqual(result, 22.1)
    });
    it('should get the only float value at the end of the string', function() {
      var scanner = Scanner(' 32.2')
      var result = scanner.nextFloat()
      assert.strictEqual(result, 32.2)
    });
    it('should get the only float value at the beginning of the string', function() {
      var scanner = Scanner(' 52.45')
      var result = scanner.nextFloat()
      assert.strictEqual(result, 52.45)
    });
    it('should get the first float value', function() {
      var scanner = Scanner('12.12 13.56')
      var result = scanner.nextFloat()
      assert.strictEqual(result, 12.12)
    });
    it('should get the second float value', function() {
      var scanner = Scanner('12.12 13.56')
      scanner.nextFloat()
      var result = scanner.nextFloat()
      assert.strictEqual(result, 13.56)
    });
    it('should get the two floats separated by new-line char', function() {
      var scanner = Scanner(`12.1 ${os.EOL} 13.1`)
      var result = scanner.nextFloat()
      assert.strictEqual(result, 12.1)
      var result = scanner.nextFloat()
      assert.strictEqual(result, 13.1)
    });
    it('should get the two floats surrounded by new-line chars', function() {
      var scanner = Scanner(`${os.EOL}12.1 ${os.EOL} 13.1${os.EOL} `)
      var result = scanner.nextFloat()
      assert.strictEqual(result, 12.1)
      var result = scanner.nextFloat()
      assert.strictEqual(result, 13.1)
    });

    it('passing empty string', function() {
      var scanner = Scanner('')
      var result = scanner.nextFloat()
      assert.isUndefined(result)
    });

    it('passing string with blank-spaces only', function() {
      var scanner = Scanner('   ')
      var result = scanner.nextFloat()
      assert.isUndefined(result)
    });

    it('passing string with blank-spaces and new-lines', function() {
      var scanner = Scanner(` ${os.EOL}  ${os.EOL}  `)
      var result = scanner.nextFloat()
      assert.isUndefined(result)
    });
  });
  describe('nextNumber', function() {
    
  });
  describe('nextString', function() {
    it('should get the only string value', function() {
      var scanner = Scanner('12')
      var result = scanner.nextString()
      assert.strictEqual(result, "12")
    });
    it('should get the only string value surrounded by blank spaces', function() {
      var scanner = Scanner(' 22 ')
      var result = scanner.nextString()
      assert.strictEqual(result, "22")
    });
    it('should get the only string value at the end of the string', function() {
      var scanner = Scanner(' 32')
      var result = scanner.nextString()
      assert.strictEqual(result, "32")
    });
    it('should get the only string value at the beginning of the string', function() {
      var scanner = Scanner(' 52')
      var result = scanner.nextString()
      assert.strictEqual(result, "52")
    });
    it('should get the first string value', function() {
      var scanner = Scanner('12 13')
      var result = scanner.nextString()
      assert.strictEqual(result, "12")
    });
    it('should get the second string value', function() {
      var scanner = Scanner('12 13')
      scanner.nextInt()
      var result = scanner.nextString()
      assert.strictEqual(result, "13")
    });
    it('should get the two strings separated by new-line char', function() {
      var scanner = Scanner(`12 ${os.EOL} 13`)
      var result = scanner.nextString()
      assert.strictEqual(result, "12")
      var result = scanner.nextString()
      assert.strictEqual(result, "13")
    });
    it('should get the two strings surrounded by new-line chars', function() {
      var scanner = Scanner(`${os.EOL}12 ${os.EOL} 13${os.EOL} `)
      var result = scanner.nextString()
      assert.strictEqual(result, "12")
      var result = scanner.nextString()
      assert.strictEqual(result, "13")
    });

    it('passing empty string', function() {
      var scanner = Scanner('')
      var result = scanner.nextString()
      assert.isUndefined(result)
    });

    it('passing string with blank-spaces only', function() {
      var scanner = Scanner('   ')
      var result = scanner.nextString()
      assert.isUndefined(result)
    });

    it('passing string with blank-spaces and new-lines', function() {
      var scanner = Scanner(` ${os.EOL}  ${os.EOL}  `)
      var result = scanner.nextString()
      assert.isUndefined(result)
    });
  });
  describe('nextBoolean', function() {
    
  });
});