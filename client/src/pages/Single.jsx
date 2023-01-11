import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Frank</span>
            <p>發布於2天前</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Title</h1>
        <p>1、人生如癡人說夢，充滿著喧嘩與躁動，卻沒有任何意義。
          2、你甜蜜的愛，就是珍寶，我不屑把處境跟帝王對調。 For thy sweet love rememberd such wealth brings That then I scorn to change my state with kings. （一想起你的愛使我那麼富有，和帝王換位我也不屑於屈就。）
          3、在命運的顛沛中，最可以看出人們的氣節。
          4、愛，和炭相同，燒起來，得想辦法叫它冷卻。讓它任意著，那就要把一顆心燒焦。
          5、不要只因一次失敗，就放棄你原來決心想達到的目的豁達者長壽。
          6、不要給百合花鍍金，畫蛇添足。
          7、勤勞一天，可得一日安眠；勤奮一生，可永遠長眠。
          8、放棄時間的人，時間也會放棄他。
          9、書籍是全人類的營養品。
          10、因為她生得美麗，所以被男人追求；因為她是女人，所以被男人俘獲。
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
