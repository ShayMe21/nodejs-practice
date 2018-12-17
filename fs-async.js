const fs = require('fs')
const path = require('path');
const util = require('util');

const mkdir = util.promisify(fs.mkdir)
const unlink = util.promisify(fs.unlink)
const rmdir = util.promisify(fs.rmdir)
const writeFile = util.promisify(fs.writeFile)

const FOLDER_NAME = 'temp';
const FILE_NAME_1 = `Thor.txt`;
const FILE_NAME_2 = 'Thanos.txt';
const FILE_CONTENT_1 = "BRING ME THANOS!"
const FILE_CONTENT_2 = "YOU SHOULD HAVE GONE FOR THE HEAD."


// Call two Async functions synchronously.
removeDirectory().then( response => {
  return makeDirectory();
});


async function removeDirectory() {

  try {
    if (fs.existsSync(FOLDER_NAME)) {
      console.log(`${FOLDER_NAME} Directory Exists, removing...`)
      
      if (fs.existsSync(FOLDER_NAME + path.sep + FILE_NAME_1)) {
        let err = await unlink(FOLDER_NAME + path.sep + FILE_NAME_1)

        if (err) {
          console.log(`Error removing the file : ${FILE_NAME_1} : ${err}`)
        }
      }
      

      if (fs.existsSync(FOLDER_NAME + path.sep + FILE_NAME_2)) {

        let err = await unlink(FOLDER_NAME + path.sep + FILE_NAME_2)

        if (err) {
          console.log(`Error removing the file: ${FILE_NAME_2} : ${err}`)
        }
      }

      process.chdir(__dirname);
      // console.log(process.cwd())

      let err = await rmdir(FOLDER_NAME)

      if (err) {
        console.log(`Error removing ${FOLDER_NAME} directory: ${err}`)
      }
    }
  } catch (e) {
    console.log(`Exception in removeDirectory(): ${e}`)
  }

}

async function makeDirectory() {
  try {
    let exists_boolean = fs.existsSync(FOLDER_NAME)

    if (!exists_boolean) {
      console.log(`${FOLDER_NAME} Directory does not exist, Creating...`)
      let err = await mkdir(FOLDER_NAME)

      if (err) {
        console.log(`Could not create the ${FOLDER_NAME} directory! ${err}`);
      }
    }

    exists_boolean =  fs.existsSync(FOLDER_NAME)

    if (exists_boolean) {
      console.log(FOLDER_NAME + ' direcory has been created.')

      process.chdir(FOLDER_NAME)


      if (path.basename(path.resolve(process.cwd())) === FOLDER_NAME){  // we are inside the temp folder
        err = await writeFile(FILE_NAME_1, FILE_CONTENT_1)

        if (err) {
          console.log(`Could not write to the file ${FILE_NAME_1}: ${err}`)
        }

        console.log(`Created file: ${FILE_NAME_1}`)

        err = await writeFile(FILE_NAME_2, FILE_CONTENT_2)

        if (err) {
          console.log(`Could not write to the file ${FILE_NAME_2}: ${err}`)
        }

        console.log(`Created file: ${FILE_NAME_2}`)
      }
    }

  } catch (e) {
    console.log(`Exception in makeDirectory(): ${e}`)
  }

}