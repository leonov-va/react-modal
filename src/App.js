import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="app">
      <main className="main">
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Открыть модальное окно
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam omnis
          inventore eum in. Reiciendis, animi asperiores optio temporibus, earum
          nesciunt nemo odit harum delectus doloribus aperiam. Hic asperiores
          laudantium, quia similique tempore explicabo. Blanditiis officiis
          quos, voluptates labore error molestiae quidem quod cupiditate et
          necessitatibus fuga nostrum culpa accusamus fugit reiciendis dicta
          veniam? Amet, molestias modi nam veniam, et eaque laudantium itaque
          distinctio voluptate magni possimus consequuntur. Nulla rem quia in
          cumque vitae, enim sint mollitia, a quae alias provident perferendis!
          Repudiandae magnam mollitia tempore pariatur sequi, quod porro odit
          sed quia cumque necessitatibus aliquid accusamus exercitationem
          deleniti quo rem?
        </p>
        <p>
          Nemo alias enim at numquam ex eligendi eaque porro quae iure sint et
          dicta ab rerum cumque, doloribus temporibus explicabo ducimus maxime
          iusto asperiores? Omnis aliquid fuga amet repellat pariatur dolore
          obcaecati velit asperiores et at, officiis in debitis laboriosam
          commodi quasi enim maxime repellendus sunt ipsa impedit accusantium
          expedita iure? Ut, architecto? Fuga, provident accusamus quaerat est
          corrupti vero tenetur. Id harum alias, corrupti non quae dolorum
          exercitationem quo provident neque beatae perspiciatis sed quas
          tempora dignissimos voluptates dolore voluptate quibusdam nemo tenetur
          molestias temporibus dolores qui placeat ab! Id doloremque, rem atque
          impedit illo aliquid consectetur iure explicabo.
        </p>
        <p>
          Ducimus facilis voluptatibus placeat aliquam eligendi dolor veniam.
          Fugiat neque quia nesciunt, laborum quis adipisci suscipit
          consectetur. Minus voluptas ratione, culpa et cum rem totam, veniam
          rerum officia nesciunt at maxime cumque nulla ab consequatur ullam.
          Accusamus quaerat vero, aut deserunt quas veritatis, voluptas facere
          id obcaecati laudantium facilis animi dignissimos ex quasi nulla
          inventore neque odio assumenda, in repellendus. Ipsum corporis tenetur
          quasi dolorum magnam libero vel nihil cum deleniti et. Ipsa impedit
          fugiat ea aliquam laborum hic velit iure, repellendus, in, doloremque
          consectetur suscipit minima eum quasi praesentium natus! Illum,
          inventore nesciunt? Rerum soluta quibusdam harum dolore
          necessitatibus!
        </p>
        <p>
          Dicta molestias eligendi fuga asperiores. Id repudiandae porro velit
          fuga! Ad necessitatibus veritatis nostrum doloribus, provident ducimus
          voluptate, illum in deleniti dignissimos iure, quasi inventore nemo
          nihil ut neque corporis quibusdam laborum magni soluta quod officiis.
          Eveniet illo officiis nulla ipsum odit, laborum, quas quis et
          assumenda nihil dolores voluptatum quibusdam deleniti odio accusantium
          facilis id adipisci explicabo? Vitae vel consectetur architecto
          asperiores autem, nisi dicta in repellat labore aut reiciendis placeat
          eveniet, iste distinctio iure eius nostrum consequatur explicabo
          corporis. Accusamus error veniam repellat praesentium perferendis amet
          fugiat ea libero reiciendis sunt, consequatur voluptas ipsam officia
          mollitia ratione recusandae.
        </p>
        <p>
          Veritatis enim eum architecto dicta eius distinctio laborum
          exercitationem, veniam impedit, alias repellat adipisci. Vero officia
          repellat saepe, fugit asperiores dolore assumenda doloribus impedit.
          Iure veritatis, voluptate accusamus cupiditate eligendi temporibus et
          dolorum, in accusantium beatae, tenetur tempore aliquid! Dolore
          necessitatibus rerum sapiente blanditiis nisi assumenda aperiam
          voluptate, dignissimos dicta quo nesciunt repudiandae, qui, minus
          optio iure! Porro eveniet ducimus ex fugit. Quis consequuntur
          accusamus sapiente qui vel ratione maxime molestiae sequi ipsam
          obcaecati sint enim, ad provident vitae, nostrum itaque! Dolores iste
          placeat reiciendis modi nobis magnam tempore necessitatibus qui totam
          esse quia voluptates illo ab, provident, tenetur blanditiis.
        </p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          doloribus eaque optio expedita quidem ullam doloremque fugit ab
          necessitatibus rem.
        </p>
      </Modal>
    </div>
  );
}

export default App;
