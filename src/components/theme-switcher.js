const toggleTheme = document.querySelector('.switch input[type="checkbox"]')

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // console.log(e.target)
    }
    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

toggleTheme.addEventListener('change', switchTheme, false);


//checking for saved theme preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleTheme.checked = true;
    }
} 


