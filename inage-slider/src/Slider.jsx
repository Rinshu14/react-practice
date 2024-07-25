import React from 'react'
import { useState, useEffect } from 'react'

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    let ImageData = [
        "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4040649/pexels-photo-4040649.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4033152/pexels-photo-4033152.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3735712/pexels-photo-3735712.jpeg?auto=compress&cs=tinysrgb&w=600"

    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % ImageData.length)
        }, 3000)

        return () => clearInterval(interval)
    })


    return (
        // <div className="flex my-10 m-auto w-[55rem]">
        //     <button className="w-16" onClick={() => setCurrentIndex((currentIndex) => currentIndex - 1 < 0 ? ImageData.length - 1 : currentIndex - 1)}>
        //         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAZlBMVEX///8AAACVlZXCwsK7u7uRkZHFxcX8/PzIyMidnZ0iIiK+vr7Ly8sbGxuZmZmOjo4nJyejo6MWFha0tLQPDw/l5eWsrKyHh4ctLS3X19dhYWFcXFxra2v19fU0NDRwcHB4eHhBQUGMjzLMAAACmUlEQVR4nO2ciW7bQBBDpVjxIcWuIstXDqf9/5+sgQStl6s2qVFgHoHlFxBD8Wl2fVRVUVFRUVHRV7U77aItfKKHp77tnx+ibfxN2/pdj9FG/qxu/PA4YCe5r3/p5TXazLSa3xbrI7M4zfrK44j0eBX0RWeixy6xWL8Bn8ftmFhcA3u9TadY76MN5eqG1OJdtKFce4MpisVVtKFcCRcv2iyiHWVyqItYBNZFuEhcypoab3EmdbmPNpTLgIszsbiJNpRLubjic5FYF4FO4eItMlgjlIvAoA25CJyiARcd1gj+8crh7WLAxVaC5tXF4HilQQO37oyL0YZy6RpBbDT/eGXAxblYBL5dDLhosEbM5ewCrEsjmw6QiwZrxFzqAgzaYI1QLgKnqFwEXsc7cFGgAwy64V87aV2At7TLXoLm16Vw8RYZcFHXCGKj+ccrAy4uCxf/gwzWiCX/eGXARX27AI9XpzM+6MV3fF2qXTpG4LXTxWPS6UO0nUntjtcex220nym9vqTP4zza0JS6FOBtF21oSo/CR6TJ+9Rju4w2NCWZJLM4G4mbOMnFXeqxR7Zbv9DRRBua0rfU40CMu1qlJtdIBInJehZtaErCyR4Zt75xkJwUBNXA33GYcFLjduDkGlkc5SRykrpgEJ/JhcRdOHmzZJIenES+uy0WDImbeRCTSQ5ITuqCQZykJyeRcR9SjyNxksrJFokgR04yiyOTHJHFsVgwLOK2uOkVTiIvrDw4abFgSNw9sd0enJRJWnDySHwmPRYMibtFxm3BSbkzZxZH4j4STVoWZyROMuMk0aTFR8kaN3KSGSeJd+bZQewUbWhCyskzMW6Lj0g8FgwLTjouGD+If/+oR9oD79vGlRaHOci0OMM/ePwJvwYa1mIFi0IAAAAASUVORK5CYII=" />
        //     </button>

        //     <img alt="image" src={ImageData[currentIndex]} className="w-[40rem]" />
        //     <button className="w-16" onClick={() => {
        //         setCurrentIndex((currentIndex) => (currentIndex + 1) % ImageData.length)
        //     }}>
        //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCWs4R7bAf2XQKWaxdE46Cd-R0ejZbJkshA&s" />
        //     </button>
        // </div>

        <div className="flex my-10 m-auto w-[55rem]">
            <button className="w-16" onClick={() => setCurrentIndex((currentIndex) => currentIndex - 1 < 0 ? ImageData.length - 1 : currentIndex - 1)}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAZlBMVEX///8AAACVlZXCwsK7u7uRkZHFxcX8/PzIyMidnZ0iIiK+vr7Ly8sbGxuZmZmOjo4nJyejo6MWFha0tLQPDw/l5eWsrKyHh4ctLS3X19dhYWFcXFxra2v19fU0NDRwcHB4eHhBQUGMjzLMAAACmUlEQVR4nO2ciW7bQBBDpVjxIcWuIstXDqf9/5+sgQStl6s2qVFgHoHlFxBD8Wl2fVRVUVFRUVHRV7U77aItfKKHp77tnx+ibfxN2/pdj9FG/qxu/PA4YCe5r3/p5TXazLSa3xbrI7M4zfrK44j0eBX0RWeixy6xWL8Bn8ftmFhcA3u9TadY76MN5eqG1OJdtKFce4MpisVVtKFcCRcv2iyiHWVyqItYBNZFuEhcypoab3EmdbmPNpTLgIszsbiJNpRLubjic5FYF4FO4eItMlgjlIvAoA25CJyiARcd1gj+8crh7WLAxVaC5tXF4HilQQO37oyL0YZy6RpBbDT/eGXAxblYBL5dDLhosEbM5ewCrEsjmw6QiwZrxFzqAgzaYI1QLgKnqFwEXsc7cFGgAwy64V87aV2At7TLXoLm16Vw8RYZcFHXCGKj+ccrAy4uCxf/gwzWiCX/eGXARX27AI9XpzM+6MV3fF2qXTpG4LXTxWPS6UO0nUntjtcex220nym9vqTP4zza0JS6FOBtF21oSo/CR6TJ+9Rju4w2NCWZJLM4G4mbOMnFXeqxR7Zbv9DRRBua0rfU40CMu1qlJtdIBInJehZtaErCyR4Zt75xkJwUBNXA33GYcFLjduDkGlkc5SRykrpgEJ/JhcRdOHmzZJIenES+uy0WDImbeRCTSQ5ITuqCQZykJyeRcR9SjyNxksrJFokgR04yiyOTHJHFsVgwLOK2uOkVTiIvrDw4abFgSNw9sd0enJRJWnDySHwmPRYMibtFxm3BSbkzZxZH4j4STVoWZyROMuMk0aTFR8kaN3KSGSeJd+bZQewUbWhCyskzMW6Lj0g8FgwLTjouGD+If/+oR9oD79vGlRaHOci0OMM/ePwJvwYa1mIFi0IAAAAASUVORK5CYII=" />
            </button>

            <img alt="image" src={ImageData[currentIndex]} className="w-[40rem]" />
            <button className="w-16" onClick={() => {
                setCurrentIndex((currentIndex) => (currentIndex + 1) % ImageData.length)
            }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCWs4R7bAf2XQKWaxdE46Cd-R0ejZbJkshA&s" />
            </button>
        </div>
    )
}

export default Slider