function showGift() {
  Swal.fire({
    title: "Gracias!",
    html: `
      <div class="swal__regalo">
        <div class="bloque">
          <p class="titular">Datos Bancarios</p>
          <ul class="lista">
            <li class="item">Nombre del titular: <b>Nombre Apellido</b></li>
            <li class="item">Alias: <b>axolot.studio.alias</b></li>
            <li class="item">Banco: <b>Santander</b></li>
          </ul>
        </div>
        <hr>
        <div class="bloque">
          <p class="titular">Buzón de regalos</p>
          <span class="fisico">Si querés hacer tu regalo personalmente, el día del evento habrá un buzón para dejar obsequios.</span>
        </div>
      </div>
    `,
    color: '#202020',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `<i class="fa fa-thumbs-up"></i> Cerrar`
  });
}