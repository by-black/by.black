<template>
  <div>
    <section class="hero is-black is-fullheight">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title is-1">
            <span>Black</span>
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>
          <p class="title is-2">News</p>
          <p class="subtitle is-6">ニュース</p>
        </h2>
        <table class="table is-striped is-fullwidth has-text-weight-bold">
          <thead>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="news in newsList" :key="news.id">
              <th>{{ news.date }}</th>
              <td>
                <a :href="news.url" target="_blank">{{ news.title }}</a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>
          <p class="title is-2">Products</p>
          <p class="subtitle is-6">サービス</p>
        </h2>
        <div class="columns">
          <div class="column is-half-desktop is-offset-one-quarter-desktop">
            <a href="https://oo.parts/" target="_blank">
              <img
                src="~/assets/ooparts.png"
                alt="OOParts"
                style="display: block;"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>
          <p class="title is-2">Overview</p>
          <p class="subtitle is-6">会社概要</p>
        </h2>
        <table class="table is-fullwidth is-size-5 has-text-weight-bold">
          <thead>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>和文商号</th>
              <td>株式会社ブラック</td>
            </tr>
            <tr>
              <th>英文商号</th>
              <td>Black Inc.</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2018/11/22</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>3600万円（資本準備金含む）</td>
            </tr>
            <tr>
              <th>代表取締役</th>
              <td>
                <a
                  href="https://twitter.com/ogawa0071"
                  target="_blank"
                  class="has-text-dark"
                  >小川楓太</a
                >
              </td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒108-0071 東京都港区白金台5-11-8-205</td>
            </tr>
            <tr>
              <th>主要株主</th>
              <td>
                <a
                  href="https://twitter.com/ogawa0071"
                  target="_blank"
                  class="has-text-dark"
                  >小川楓太</a
                ><br />
                <a
                  href="https://www.cyberagentcapital.com/"
                  target="_blank"
                  class="has-text-dark"
                  >株式会社サイバーエージェント・キャピタル</a
                ><br />
                <a
                  href="https://twitter.com/kensuu"
                  target="_blank"
                  class="has-text-dark"
                  >古川健介</a
                ><br />
                <a
                  href="https://twitter.com/daichi_zizai"
                  target="_blank"
                  class="has-text-dark"
                  >塚本大地</a
                ><br />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>
          <p class="title is-2">Contact</p>
          <p class="subtitle is-6">お問い合わせ</p>
        </h2>
        <div class="columns">
          <div class="column is-half-desktop is-offset-one-quarter-desktop">
            <a href="mailto:info@by.black" class="box_">
              <p class="title is-4 has-text-centered">info@by.black</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <footer class="section">
      <div class="container">
        <p>
          <small>Copyright © 2021 Black Inc. All rights reserved.</small>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import newsList from '~/assets/news.json'

export default {
  data() {
    return {
      newsList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

h2 {
  margin-bottom: 1.25rem;
}

.title {
  font-family: 'Helvetica Now Display W01 Black', sans-serif;
}

.is-black {
  background-color: $black;
}

.hero {
  .is-fluid {
    padding-left: 0;
    padding-right: 0;
  }

  .title {
    font-size: 28vw;
    text-align: center;
    cursor: default;
  }
}

.box_ {
  background-color: $white;
  border: 0.3125rem solid $black;
  display: block;
  padding: 1.25rem;

  p {
    color: $black;
  }

  &:hover {
    background-color: $black;

    p {
      color: $white;
    }
  }
}
</style>
