/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        primary:['Righteous'],
        secondary:['Saira'],
      },
           keyframes:{
        'ping':{'0,75%,100%': {transform: 'scale(1.5)'},
          opacity: 0.5,
        },
        'animate1':{
	      '0%, 100%':{transform:'translateY(0%)'},
	      '50%':{transform:'translateY(25%)'},
        '75%':{transform:'translateX(25%)'},
        },
        'animate2':{
	      '0%, 100%':{transform:'translateX(-25%)'},
	      '25%':{transform:'translateX(5%)'},
        '50%':{transform:'translateY(10%)'},
        },
        'animate3':{
	      '0%, 100%':{transform:'translateX(25%)'},
	      '25%':{transform:'translateY(10%)'},
        '50%':{transform:'translateX(-5%)'},
        },
        'animate4':{
	      '0%, 100%':{transform:'translateY(-10%)'},
	      '25%':{transform:'translateY(25%)'},
        '75%':{transform:'translateX(-30%)'},
        },
        'animate5':{
	      '0%, 100%':{transform:'translateX(25%)'},
	      '25%':{transform:'translateX(-5%)'},
        '50%':{transform:'translateY(25%)'},
        },
        'animate6':{
	      '0%, 100%':{transform:'translateY(0%)'},
	      '25%':{transform:'translateY(-25%)'},
        '75%':{transform:'translateX(-30%)'},
        },
      },
      animation:{
        'ping':'ping 2s cubic-bezier(0.8, 1, 1, 1) infinite',
        'animate1': 'animate1 8s ease-in-out infinite',
        'animate2': 'animate2 8s ease-in-out infinite',
        'animate3': 'animate3 7s ease-in-out infinite',
        'animate4': 'animate4 6s ease-in-out infinite',
        'animate5': 'animate5 7s ease-in-out infinite',
        'animate6': 'animate6 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

