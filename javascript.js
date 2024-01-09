document.addEventListener("DOMContentLoaded", function () {
  const myCollapse = new bootstrap.Collapse(
    document.getElementById("collapseExample"),
    {
      toggle: false,
    }
  );

  myCollapse.show();

  const myAnchor = document.querySelector('a[href="#collapseExample"]');
  myAnchor.addEventListener("click", function () {
    myCollapse.toggle();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const myCollapseSummer = new bootstrap.Collapse(
    document.getElementById("collapseSummer"),
    {
      toggle: false,
    }
  );
  myCollapseSummer.show();

  const myAnchorSummer = document.querySelector('a[href="#collapseSummer"]');
  myAnchorSummer.addEventListener("click", function () {
    myCollapseSummer.toggle();
  });
});
