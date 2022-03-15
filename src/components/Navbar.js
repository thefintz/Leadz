const Navbar = () => {
  return <nav class="navbar pl-5" style={{ height: "5rem" }} role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://fintz.com.br">
      <img src="./icon.png" style={{ minHeight: "3rem" }}/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item is-size-5">
        Início
      </a>

      <a class="navbar-item is-size-5">
        Sobre
      </a>

      <div class="navbar-item has-dropdown is-hoverable is-size-5">
        <a class="navbar-link is-size-5">
          Soluções
        </a>

        <div class="navbar-dropdown is-size-5">
          <a class="navbar-item is-size-5">
            Fundos
          </a>
          <a class="navbar-item is-size-5">
            Futuros
          </a>
          <a class="navbar-item is-size-5">
            Debêntures
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item is-size-5">
            CRIs
          </a>
        </div>
      </div>

      <a class="navbar-item is-size-5">
        Contato
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary is-size-5">
            <strong>Log in</strong>
          </a>
          <a class="button is-light is-size-5">
            Registrar
          </a>
        </div>
      </div>
    </div>
  </div>
  </nav>
}

export default Navbar