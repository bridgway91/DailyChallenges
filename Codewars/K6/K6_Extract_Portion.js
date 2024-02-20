// You have to extract a portion of the file name as follows:
// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end

// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION
// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34
// 1231231223123131_myFile.tar.gz2

// Outputs
// FILE_NAME.EXTENSION
// This_is_an_otherExample.mpg
// myFile.tar

// Acceptable characters for random tests:
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.



class FileNameExtractor { // weird solution setup that i'm not familiar with... also solved it my own way once i realized it just wanted the inner portion between first _ and last .
    static extractFileName (dirtyFileName) {
      const preIndex = dirtyFileName.indexOf('_')
      const postIndex = dirtyFileName.lastIndexOf('.')
      return dirtyFileName.slice(preIndex+1,postIndex);
    }
}


// alternatively...

class FileNameExtractor { // this shit doesnt make sense, some regex is just incomprehensible
    static extractFileName = dirty => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];
  }

class FileNameExtractor {
    static extractFileName (s) {
        return s.replace(/^\d*_(.*)\..*$/,'$1');
    }
}

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        const regex = /\_(.*)\./;
        return regex.exec(dirtyFileName)[1];
    }
}

class FileNameExtractor { // here's the closest one to making sense
	static extractFileName(dirtyFileName) {
		return dirtyFileName.replace(/^[0-9]+_/, '').replace(/.[A-Za-z0-9]+$/, '');
	} // im assuming first replace removes any numbers up to and including following underscore, while second replace removes part after (and including) last period and ends the string (guessing that's what the +$ part means)
}