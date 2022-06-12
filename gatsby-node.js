const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const historias = [
    {
      slug: "acoso-secundaria",
      order: 1,
      title: "Acoso en la secundaria",
      name: "Sandra, la mamá de Mía",
      year: "2020",
      content: `
      <p>
            Tengo una niña de 16 años que hace 2 años fue acosada sexualmente
            por su maestro de matemáticas en la secundaria. Desde el primer día
            en que ella llegó al salón de clases de éste maestro, él ya la tenía
            ubicada, sabía su nombre, sabía quién era su familia, le hacía
            comentarios fuera de lugar. Incluso, durante los recesos quería que
            ella le cuidara su chamarra y sus llaves haciéndole ver que era un
            privilegio que muchas deseaban.
          </p>
          <p>
            Al paso de los días, sus amigos se dieron cuenta del acoso que
            sufría por este maestro; así que ellos hacían comentarios para
            desviar la atención del maestro hacia ella. Cuando ella quería ir al
            baño, él la vigilaba desde la puerta del salón argumentando que ella
            se iba a la cooperativa. Fueron momentos muy difíciles para ella
            además de que sufría bullying por sus compañeros de otros salones.
            Ella se aguantó, trató de disimular, de soportar, hasta el día en el
            que el maestro se le insinuó descaradamente enfrente de todos. Ella
            inmediatamente acudió con la trabajadora social quién le preguntó
            varias veces si estaba segura, si no era que su falda estaba muy
            corta, si no era su imaginación, que pensará bien porque él perdería
            su trabajo.
          </p>
          <p>
            Le prohibieron que me dijera a mí hasta que pudieran hablar con la
            directora. Los demás maestros también pusieron en duda su palabra,
            además de que este maestro tenía bastantes aliadas en el salón.
            Sorprendentemente, en cada grupo de la escuela tenía una aliada
            mujer, él organizó que hicieran una huelga en contra de mi hija, que
            le llenaran de basura su mochila y le aventaran papeles diciendo que
            por su culpa ellos se iban a quedar sin aprender.
          </p>
          <p>
            En el momento en el que yo me enteré, me volví loca, me molesté
            bastante, fuimos directamente a la escuela con la directora. Cuando
            comencé a escuchar lo que había pasado, miré a mi niña y le dije que
            nada que dijeran me importaba, solo su palabra. Por una razón u
            otra, la directora nos persuadió de poner una denuncia penal ya que
            no sabíamos a detalle todo lo que había pasado, únicamente lo que
            ese día detonó que mi hija ya no aguantara más. Tontamente le
            hicimos caso, hasta 2 semanas después del acoso se retiró al maestro
            del grupo y posteriormente al mes de la escuela. Pero él no paró,
            continuó buscándola en redes sociales, cosa que hicimos saber de
            nuevo en la escuela. Cuando se hizo un supuesto juicio no nos
            dejaron entrar argumentando que habíamos llegado dos minutos tarde,
            se le dio seguimiento y actualmente tenemos pendiente un citatorio
            en la SEP.
          </p>
          <p>
            No puedo creer que la hayan revictimizado, las propias maestras, la
            propia directora; que yo haya sido tan estúpida de no poner una
            denuncia penal en ese momento. Lo que me sorprende más aún es que
            compañeras del grupo apoyarán al maestro sabiendo lo que él hacía y
            que no era la primera vez, que las mamás se prestaran a esto.
          </p>
          <p>
            Hace unos días platiqué con mi hija y se sinceró a contarme todo lo
            que había pasado desde el inicio. Ella no había podido contarlo todo
            porque meses después lo vio cerca de nuestra casa y la escuela a la
            que va ahora. Me dió tanto miedo y tanta impotencia el no haber
            estado ahí para defenderla y me queda claro que esta persona es un
            enfermo que merece un castigo penal y no las tontas reprendas de la
            SEP. Yo confíe en la directora, por qué dijo que tendría el castigo
            que merece y que se le tenía que dar seguimiento con autoridades
            pero no fue así.
          </p>
          <p>
            Me queda claro que en esos momentos se hubiera hecho tantas cosas
            pero el “hubiera” no existe y decirlo ahora ya es echarle más sal a
            la herida y me queda claro muy claro qué las mujeres podemos
            violentar tanto como los hombres y que éste hecho a marcado a mi
            niña por siempre. Le he pedido que nunca jamás en la vida se vuelva
            a callar ni por temor, por pena, ni por ningún motivo en su vida;
            que como se lo dije una vez: lo único que yo creo es su palabra. ¡No
            quiero que nunca jamás deje que la vuelvan a lastimar!
          </p>
          <p>
            Justo antes de la cuarentena se dió una platica en la escuela
            precisamente abordando temas como este y pedí información pero ya no
            se concretó nada.
          </p>
      `,
    },
    {
      slug: "trauma",
      order: 2,
      title: "Trauma generacional",
      name: "María",
      year: "2020",
      content: `
      <p>
        Hace un rato, mientras la familia desayunaba, comenzamos a platicar
        sobre la forma en que sus relaciones surgieron.
      </p>
      <p>
        Todos recordaban con nostalgia y cariño, a mi Yito ( mi bisabuelo) a mi
        Yita, (Mi bisabuela) y a mi abuela y abuelo. Resaltaban los momentos
        bonitos compartidos, luego mi tía comenzó a platicar que, mi Yita,
        cuando niñas, les contó que mi Yito, la raptó, que ellos no se conocían,
        y un día que llegó de visita a un pueblo, él la abordó y la tomó de sus
        trenzas y se la llevó a rastras.
      </p>
      <p>
        Luego la violó. Pero en ese tiempo aquello no era considerado abuso
        sexual sino una manera "normal" de conseguir esposa.
      </p>
      <p>
        Ella debió asimilar lo sucedido, y aceptar vivir en concubinato con su
        violador que luego se convirtió en su esposo, y de ello nacieron 8 hijos
        y tuvo 5 abortos. Mi Yita se volvió una luciérnaga sin luz viviendo
        siempre de noche, no recuerdo haberla visto sonreír nunca.
      </p>
      <p>
        Caí en cuenta de que a nosotros, los nietos y biznietos se nos enseñó a
        tenerle miedo a ella, porque no era expresiva, y se nos enseñó a
        enaltecer a mi Yito y a verlo como el bueno de la historia, cuando jamás
        fue así.
      </p>
      <p>
        Luego vino la historia de mi abuela materna, según cuentan, sucedió
        parecido, ella tenía novio y habían planeado verse a fuera del Tejaban
        donde ella vivía, pero aquél día al salir a ver a su novio, alguien le
        puso un costal en la cabeza, la cargó y la raptó.
      </p>
      <p>
        Acto seguido fue abusada sexualmente en el monte por un amigo del que
        era su novio, luego de ello fue obligada a ser su concubina toda la
        vida, mientras que el que era su novio creyó que ella le mintió.
      </p>
      <p>
        De esa relación nacieron 6 hijos y un aborto, es decir, mis tíos y tías
        y mamá. Mi abuelo murió antes de que yo naciera, pero siempre me
        vendieron el cuento de que fue un gran hombre y que la villana siempre
        fue mi abuela.
      </p>
      <p>
        Debo decir que ella es un girasol que vive dentro de una cueva, por eso
        ya no alza la cara al cielo y difícilmente sonríe. Siempre creí que mi
        abuela nos rechazaba, pero veo que desde siempre el mundo la rechazó,
        omitió abusó y burló de ella y de mi bisabuela. Terminé la conversación
        con mamá y mi tía explicándoles que ellas fueron víctimas de usos y
        costumbres horribles, y que jamás fueron las malas de la historia como
        nos lo hicieron creer, y los demás fueron cómplices de una violación
        constante a su existencia. Pero su respuesta fue, " ay, bueno, pero sí
        hay que decir que sus violadores eran guapos..." (dijeron esto a
        sabiendas de que yo también fui violada). Pero entiendo que su mente
        ahora no da para más.
      </p>
      <p>
        Me pareció importante compartirlo por que creo que yo, nosotros* somos
        la generación del cambio, los que provenimos de generaciones machistas,
        abusadoras, e inhumanas. Hago la promesa de que soy la última generación
        adoctrinado en el machismo y el silencio y la primera generación en
        romper el patrón y luchar por lo justo y por nosotras.
      </p>
      <p>
        Soy el sueño cumplido de las aves ( mis abuelas y bisabuelas) a las que
        les cortaron las alas, por ustedes yo voy a volar bien alto.
      </p>
      `,
    },
    {
      slug: "agresores",
      order: 3,
      title: "Los agresores también pueden ser tus familiares",
      name: "Noemí",
      year: "2020",
      yearOcured: "1998",
      content: `
      <p>
      Cuando tenía como 5 o 6 años, mi tío político abusó de mí. Me hacía sexo
      oral cada que tenía oportunidad, me tocaba mis pechos y me ponía
      pornografía. Era muy cercano a mi familia dado que estaba casado con la
      hermana de mi mamá. Mi mamá era súper confiada y al ser madre soltera me
      dejaba ir con mi tía a dormir para pasar tiempo con mis primos que eran
      de mi edad y crecimos como hermanos. Mi tío se aprovechaba de esta
      situación y del hecho que mi papá después de que se separó de mi mamá
      nunca me volvió a buscar.
    </p>
    <p>
      En mi familia son súper cerrados y machistas así que nunca dije nada lo
      cual me obligó a crecer junto de mi agresor. Siempre me incomodó su
      presencia, y aun cuando la parte de sexo oral ya no pasaba, había
      ocasiones en las que yo estaba sola con él y empezaba a masturbarse. Lo
      único que yo hacía era salirme o irme a otro lado.
    </p>
    <p>
      Cuando tenía 21 años me casé y tuve una bebé que ahora tiene 5 años. Mi
      matrimonio no funcionó y yo comencé una relación con otra persona. Mi
      mamá siempre me culpó por mi matrimonio fallido. Siempre pensé que mi
      actual pareja era la responsable de que mi matrimonio no funcionara.
      Esto provocó que nunca lo haya aceptado por lo que he tenido bastantes
      problemas por eso. Pero para mí, mi actual pareja es la única a la que
      le he podido contar aquello que me ocurrió cuando era pequeña.
    </p>
    <p>
      Hace un mes tuve una discusión fuerte con mi madre la cual no terminó
      bien. Le conté lo que me había sucedido con el tío político y terminé
      culpándola y diciéndole que si me hubiera cuidado mejor eso nunca me
      hubiera sucedido. Lo único que me pudo contestar fue por qué mi pareja
      actual no me pagaba una terapia si tanto me quería.
    </p>
    <p>
      Sigo cargando con pensamientos negativos alrededor de mi experiencia y
      mi único alivio es pensar en que ya está muerto. Murió hace como 4 años
      y por fin mi monstruo desapareció. Pero los recuerdos quedaron ahí, y no
      siento apoyo de nadie a pesar de que ya lo dije es como si nada hubiese
      pasado. No he logrado sanar.
    </p>
      `,
    },
  ]

  const template = path.resolve("./src/components/layout/HistoriaTemplate.tsx")

  const historiasOrd = historias.sort((a, b) => a.order - b.order)
  const stories = []

  for (let i = 0; i < historiasOrd.length; i++) {
    stories.push({
      ...historiasOrd[i],
      nextlink: i + 1 === historiasOrd.length ? null : historiasOrd[i + 1].slug,
    })
  }

  stories.forEach(node => {
    if (node.slug) {
      const path = node.slug
      createPage({
        path: `/historias/${path}`,
        component: template,
        // In your blog post template's graphql query, you can use pagePath
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          data: node,
        },
      })
    }
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
