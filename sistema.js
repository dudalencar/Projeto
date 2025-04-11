<script>
    document.querySelectorAll('.has-submenu').forEach(item => {
      item.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    });
  </script>
