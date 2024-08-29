

export default function Home() {
  return (
    <div id="webcrumbs"> 
    	<div className="w-[400px] min-h-[800px] bg-center bg-cover bg-no-repeat text-center rounded-lg shadow-lg" style={{backgroundImage: 'url(https://cdn.webcrumbs.org/assets/images/ask-ai/bgs/27.svg)'}}>
    	  <img src="breathwork-ai\public\images\logo.png" alt="Logo" className="mx-auto mt-6 mb-4" />
    	  <h1 className="text-2xl font-title mb-3">Personalized Breathwork</h1>
    	  <p className="text-sm mb-8">
    	    Personalized breathwork sessions tailored to help make you sleep better, reduce stress and boost overall well being.
    	  </p>
    	  <button className="bg-primary text-white py-2 px-6 rounded-full mb-3">Try for free</button>
    	  <button className="bg-white text-primary py-2 px-6 rounded-full mb-8">Log in</button>
    	  <h2 className="text-xl font-title mb-3">Change your life</h2>
    	  <p className="text-sm mb-8">
    	    Breath work can significantly reduce stress and improve mental clarity by promoting relaxation and enhancing focus. Incorporating personalized breathing exercises into your daily routine can lead to better emotional wellbeing and overall health.
    	  </p>
    	  <button className="bg-primary text-white py-2 px-6 rounded-full mb-3">Try for free</button>
    	</div> 
    </div>
  )
}

