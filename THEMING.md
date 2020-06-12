# Theming

- Material-UI
- Styled-Component

Material-UI をスタイリングのフレームワークとして採用した。  
好き嫌い分かれるトコロだけど、スタートとしては完成度が上げやすいと思う。

しかしながら、本家サイトにある **makeStyle** を利用するスタイルの調整方法が、エレガントではないので styled-component を併用することにした。

コンポーネントのテーマ的な部分は Material-UI に任せ、それが別のフレームワークに差し替えられても適用できるものを styled-component に持たせておきたい。

例えば、グローバルで基礎的なスタイリングを行う手段としては、Mui にも指定方法が用意されている。styled-component では createGrobalStyle がそれにあたる。  
本テンプレートでは、font-family や font-size については styled-component を利用し、Mui がそれを阻害しないようにしている。

また、Mui において利用度が高いであろう SwipeableTemporaryDrawer をサンプルとして収録した