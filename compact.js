import fs from 'fs/promises';

// Bundle CSS Files together
(async () => {

	let minCss = '';

	// remove built css
	try{
		await fs.unlink("dist/compact.min.css");
	}catch(e){}
 
	// remove folder
	try{
		await fs.rmdir('dist');
	}catch(e){}
	

	// make dist folder
	await fs.mkdir('dist');

	// all the files and folders in css/
	const names = await fs.readdir('./css');
	for (const f of names) {
		if (f.includes(".css")) {

			// get css styles
			const css = await fs.readFile(`./css/${f}`, 'utf-8');
			minCss += css.replace(/\s|\n/gm, '');
		} else { //folder
			const innerFolders = await fs.readdir(`./css/${f}`);
			
			// get styles for inner folders
			for(const cssFileName of innerFolders){
				if(cssFileName.includes(".css")){
					const css= await fs.readFile(`./css/${f}/${cssFileName}`, 'utf-8');
					minCss += css.replace(/\s|\n/gm, '');
				}
			}
		}
	}

	// write css file
	await fs.writeFile('./dist/compact.min.css', minCss, 'utf-8');

	// copy all css into dist
	await fs.cp('css', 'dist', { recursive: true });
	await fs.copyFile('compact.css', 'dist/compact.css');

	minCss='';
	console.log("Compact CSS Done!")
})()
