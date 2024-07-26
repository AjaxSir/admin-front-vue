/*
 * @Date: 2024-07-26 13:43:54
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-26 18:19:48
 * @Description: 
 */
import { ICat } from '../types/cat'
import { LevelToUnit  } from './level'
export class Cat implements ICat {
    el:HTMLElement | null = null
    left: number = 0;
    top: number = 0;
    level: number = 1;
    earnMoney: number = 0;
    unit: string = ''
    pic: string = ''
    idx:number = 0;
    constructor(el: HTMLElement, level: keyof typeof LevelToUnit, idx: number) {
        this.level = level
        this.earnMoney = level + 1
        this.unit = LevelToUnit[level]
        this.pic = ''
        this.idx = idx
        this.el = el
        // this.init(el)
    }
    init(el: HTMLElement) {
        this.el = el
        const bag = this.el?.querySelector('.bag') as HTMLDivElement
        console.log(this.level, 'level')
        bag.style.background = `@/assets/images/cat/cat-${1}.jpg`
        const { left, top } = this.el.getBoundingClientRect()
        this.left = left
        this.top = top
        console.log(this.el.getBoundingClientRect())
    }

    move() {
        const bag = this.el?.querySelector('.bag') as HTMLDivElement
        bag.ontouchstart = (e) => {
            
        }
        bag.addEventListener('touchmove',(e) => {
            const { clientX, clientY } = e.touches[0]
            // console.log(clientX, clientY, this.top, this.t)
            const left = clientX - this.left
            const top = clientY - this.top
            bag.style.left = `${left}px`
            bag.style.top = `${top}px`
            console.log('touchmove-----','top=>', clientY - this.top, 'left=>',clientX - this.left)
        })
        bag.ontouchend = (e) => {
            // const { clientX, clientY } = e.changedTouches[0]
            // this.top = clientY
            // this.left = clientX
            // console.log('ontouchend-----','top=>', this.top, 'left=>',this.left)
        }
    }



}
export const generateCat = () => {
    let catArr:ICat[] = []
    for(let i = 1; i < 17;i++){
        catArr.push(new Cat(document.querySelector(`#seat-${i}`) as HTMLElement, i as keyof typeof LevelToUnit, i))
    }
    return catArr
}
