<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a
        class="navbar-brand m-0"
        href=" https://demos.creative-tim.com/soft-ui-dashboard-pro/pages/dashboards/default.html "
        target="_blank"
      >
        <span class="ms-1 font-weight-bold">Punto de venta</span>
      </a>
    </div>
    <hr class="horizontal dark mt-0" />
    <div
      class="collapse navbar-collapse w-auto h-auto"
      id="sidenav-collapse-main"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#dashboardsExamples"
            class="nav-link"
            aria-controls="dashboardsExamples"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <svg
                width="12px"
                height="12px"
                viewBox="0 0 45 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>shop</title>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-1716.000000, -439.000000)"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  >
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(0.000000, 148.000000)">
                        <path
                          class="color-background"
                          d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                          opacity="0.598981585"
                        ></path>
                        <path
                          class="color-background"
                          d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span class="nav-link-text ms-1">Dashboards</span>
          </a>
          <div class="collapse" id="dashboardsExamples">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <a class="nav-link" href="../../pages/dashboards/default.html">
                  <span class="sidenav-mini-icon"> D </span>
                  <span class="sidenav-normal"> Default </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="../../pages/dashboards/automotive.html"
                >
                  <span class="sidenav-mini-icon"> A </span>
                  <span class="sidenav-normal"> Automotive </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="../../pages/dashboards/smart-home.html"
                >
                  <span class="sidenav-mini-icon"> S </span>
                  <span class="sidenav-normal"> Smart Home </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  href="#vrExamples"
                >
                  <span class="sidenav-mini-icon"> V </span>
                  <span class="sidenav-normal">
                    Virtual Reality <b class="caret"></b
                  ></span>
                </a>
                <div class="collapse" id="vrExamples">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/dashboards/vr/vr-default.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> V </span>
                        <span class="sidenav-normal"> VR Default </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/dashboards/vr/vr-info.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> V </span>
                        <span class="sidenav-normal"> VR Info </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/dashboards/crm.html">
                  <span class="sidenav-mini-icon"> C </span>
                  <span class="sidenav-normal"> CRM </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item mt-3">
          <h6
            class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"
          >
            PAGES
          </h6>
        </li>
        <li class="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#pagesExamples"
            class="nav-link"
            aria-controls="pagesExamples"
            role="button"
            aria-expanded="false"
          >
            <div
              class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center me-2"
            >
              <svg
                width="12px"
                height="12px"
                viewBox="0 0 42 42"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>office</title>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-1869.000000, -293.000000)"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  >
                    <g transform="translate(1716.000000, 291.000000)">
                      <g
                        id="office"
                        transform="translate(153.000000, 2.000000)"
                      >
                        <path
                          class="color-background"
                          d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                          opacity="0.6"
                        ></path>
                        <path
                          class="color-background"
                          d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <span class="nav-link-text ms-1">Pages</span>
          </a>
          <div class="collapse" id="pagesExamples">
            <ul class="nav ms-4 ps-3">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  href="#profileExample"
                >
                  <span class="sidenav-mini-icon"> P </span>
                  <span class="sidenav-normal">
                    Profile <b class="caret"></b
                  ></span>
                </a>
                <div class="collapse" id="profileExample">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/profile/overview.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> P </span>
                        <span class="sidenav-normal"> Profile Overview </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/profile/teams.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> T </span>
                        <span class="sidenav-normal"> Teams </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/profile/projects.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> A </span>
                        <span class="sidenav-normal"> All Projects </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  href="#usersExample"
                >
                  <span class="sidenav-mini-icon"> U </span>
                  <span class="sidenav-normal">
                    Users <b class="caret"></b
                  ></span>
                </a>
                <div class="collapse" id="usersExample">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/users/reports.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> R </span>
                        <span class="sidenav-normal"> Reports </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/users/new-user.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> N </span>
                        <span class="sidenav-normal"> New User </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  href="#accountExample"
                >
                  <span class="sidenav-mini-icon"> A </span>
                  <span class="sidenav-normal">
                    Account <b class="caret"></b
                  ></span>
                </a>
                <div class="collapse" id="accountExample">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/account/settings.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> S </span>
                        <span class="sidenav-normal"> Settings </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/account/billing.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> B </span>
                        <span class="sidenav-normal"> Billing </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/account/invoice.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> I </span>
                        <span class="sidenav-normal"> Invoice </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/account/security.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> S </span>
                        <span class="sidenav-normal"> Security </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  href="#projectsExample"
                >
                  <span class="sidenav-mini-icon"> P </span>
                  <span class="sidenav-normal">
                    Projects <b class="caret"></b
                  ></span>
                </a>
                <div class="collapse" id="projectsExample">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/projects/general.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> G </span>
                        <span class="sidenav-normal"> General </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/projects/timeline.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> T </span>
                        <span class="sidenav-normal"> Timeline </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../../pages/pages/projects/new-project.html"
                      >
                        <span class="sidenav-mini-icon text-xs"> N </span>
                        <span class="sidenav-normal"> New Project </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/pages/pricing-page.html">
                  <span class="sidenav-mini-icon"> P </span>
                  <span class="sidenav-normal"> Pricing Page </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/pages/messages.html">
                  <span class="sidenav-mini-icon"> M </span>
                  <span class="sidenav-normal"> Messages </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/pages/rtl-page.html">
                  <span class="sidenav-mini-icon"> R </span>
                  <span class="sidenav-normal"> RTL </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/pages/widgets.html">
                  <span class="sidenav-mini-icon"> W </span>
                  <span class="sidenav-normal"> Widgets </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/pages/charts.html">
                  <span class="sidenav-mini-icon"> C </span>
                  <span class="sidenav-normal"> Charts </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/pages/sweet-alerts.html">
                  <span class="sidenav-mini-icon"> S </span>
                  <span class="sidenav-normal"> Sweet Alerts </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/pages/notifications.html">
                  <span class="sidenav-mini-icon"> N </span>
                  <span class="sidenav-normal"> Notifications </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Aside",
};
</script>

<style></style>
