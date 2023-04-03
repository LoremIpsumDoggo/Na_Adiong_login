function confirm(){
    if (document.getElementById('ipt1').value == '' && document.getElementById('ipt2').value == ''){
        document.getElementById('remark').innerHTML = 'Please enter your username and password';
        console.log('Login error. No values for username & password.');
    } else if (document.getElementById('ipt1').value == ''){
        document.getElementById('remark').innerHTML = 'Please enter your username';
        console.log('Login error. No value for username.');
    } else if (document.getElementById('ipt2').value == ''){
        document.getElementById('remark').innerHTML = 'Please enter your password';
        console.log('Login error. No value for password.');
    } else {
        document.getElementById('remark').innerHTML = '';
        console.log('Login successful.');
    }
}