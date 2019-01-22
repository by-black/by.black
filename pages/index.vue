<template>
  <div>
    <section class="hero is-black is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            <img src="~/assets/hero.svg" alt="Made by Black">
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>
          <p class="title is-2">
            Products
          </p>
          <p class="subtitle is-6">
            サービス
          </p>
        </h2>
        <div class="columns">
          <div class="column is-half-desktop is-offset-one-quarter-desktop">
            <p class="title is-4 has-text-centered">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>
          <p class="title is-2">
            Overview
          </p>
          <p class="subtitle is-6">
            会社概要
          </p>
        </h2>
        <table class="table is-fullwidth is-size-5 has-text-weight-bold">
          <tbody>
            <tr>
              <th />
              <td />
            </tr>
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
              <td>100万円（資本準備金含む）</td>
            </tr>
            <tr>
              <th>代表取締役</th>
              <td>小川楓太</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒108-0071 東京都港区白金台5-11-8-205</td>
            </tr>
            <tr>
              <th />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>
          <p class="title is-2">
            Contact
          </p>
          <p class="subtitle is-6">
            お問い合わせ
          </p>
        </h2>
        <div class="columns">
          <div class="column is-half-desktop is-offset-one-quarter-desktop">
            <a href="mailto:info@by.black" class="box_">
              <p class="title is-4 has-text-centered">
                info@by.black
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <footer class="section">
      <div class="container">
        <p>
          <small>Copyright © 2019 Black Inc. All rights reserved.</small>
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 1.25rem;
}

.box_ {
  background-color: #ffffff;
  border: 0.3125rem solid #0a0a0a;
  display: block;
  padding: 1.25rem;

  p {
    color: #0a0a0a;
  }

  &:hover {
    background-color: #0a0a0a;

    p {
      color: #ffffff;
    }
  }
}
</style>
