import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});


app.get('/2a', (req, res) => {
  res.send(summa(req.query.a,req.query.b).toString());
});

function summa(a = 0, b = 0){
	let aa = 0;
	let bb = 0;
	if (Number(a)) aa = +a;
	if (Number(b)) bb = +b;	
	return aa + bb;
}

app.get('/2b', (req, res) => {
  res.send(fullName(req.query.fullname).toString());
});

function fullName(fullname) {
	// const re = new RegExp('([a-zA-Zóа-яА-ЯёЁ]*)\\s*([a-zA-Zóа-яА-ЯёЁ]*)\\s*([a-zA-Zóа-яА-ЯёЁ]*)');
	 const reCheck = new RegExp('[0-9_/]+');
	 const re = new RegExp(' ');
	let output = 'Invalid fullname';
	// 
	if(fullname && !reCheck.test(fullname)){
		const username = fullname.toLowerCase().split(re);
		  // output = username + ' ' + username.length + ' ' + !reCheck.test(fullname);
		if (username.length == 3) {
			output = username[2][0].toUpperCase() + username[2].slice(1) + ' ' + username[0][0].toUpperCase() + '. ' + username[1][0].toUpperCase() + '.';
		}
		else if (username.length == 2){
			output = username[1][0].toUpperCase() + username[1].slice(1) + ' ' + username[0][0].toUpperCase() + '.';	
		}
		else if (username.length == 1){
			output = username[0][0].toUpperCase() + username[0].slice(1);	
		}
	}
	return output;
}

app.get('/2c', (req, res) => {
  res.send(userName(req.query.username).toString());
});

function userName(url) {
	const re = new RegExp('\\/?(\\w+)(\\?+\\S+|\\/profile$|$)');
	const username = url.match(re)[1];
	return '@' + username;
}



app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
