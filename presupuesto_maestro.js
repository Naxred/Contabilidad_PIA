function prueba() {

    //Extraer datos de la tabla INFORMACION DE INVENTARIOS

    var InventarioInicial_MaterialA = parseFloat(document.getElementById('InventarioInicial_MaterialA').value);
    var InventarioFinal_MaterialA = parseFloat(document.getElementById('InventarioFinal_MaterialA').value);
    var CostoPrimer_MaterialA = parseFloat(document.getElementById('CostoPrimer_MaterialA').value);
    var CostoSegundo_MaterialA = parseFloat(document.getElementById('CostoSegundo_MaterialA').value);

    var InventarioInicial_MaterialB = parseFloat(document.getElementById('InventarioInicial_MaterialB').value);
    var InventarioFinal_MaterialB = parseFloat(document.getElementById('InventarioFinal_MaterialB').value);
    var CostoPrimer_MaterialB = parseFloat(document.getElementById('CostoPrimer_MaterialB').value);
    var CostoSegundo_MaterialB = parseFloat(document.getElementById('CostoSegundo_MaterialB').value);

    var InventarioInicial_MaterialC = parseFloat(document.getElementById('InventarioInicial_MaterialC').value);
    var InventarioFinal_MaterialC = parseFloat(document.getElementById('InventarioFinal_MaterialC').value);
    var CostoPrimer_MaterialC = parseFloat(document.getElementById('CostoPrimer_MaterialC').value);
    var CostoSegundo_MaterialC = parseFloat(document.getElementById('CostoSegundo_MaterialC').value);



    var InventarioInicialPrimer_ProductoA = parseFloat(document.getElementById('InventarioInicialPrimer_ProductoA').value);
    var InventarioInicialSegundo_ProductoA = parseFloat(document.getElementById('InventarioInicialSegundo_ProductoA').value);

    var InventarioInicialPrimer_ProductoB = parseFloat(document.getElementById('InventarioInicialPrimer_ProductoB').value);
    var InventarioInicialSegundo_ProductoB = parseFloat(document.getElementById('InventarioInicialSegundo_ProductoB').value);

    var InventarioInicialPrimer_ProductoC = parseFloat(document.getElementById('InventarioInicialPrimer_ProductoC').value);
    var InventarioInicialSegundo_ProductoC = parseFloat(document.getElementById('InventarioInicialSegundo_ProductoC').value);

    //Extraer datos de la tabla PRODUCTOS

    var Precio_venta_PrimerSemestre_ProductoA = parseFloat(document.getElementById('Precio_venta_PrimerSemestre_ProductoA').value);
    var Precio_venta_PrimerSemestre_ProductoB = parseFloat(document.getElementById('Precio_venta_PrimerSemestre_ProductoB').value);
    var Precio_venta_PrimerSemestre_ProductoC = parseFloat(document.getElementById('Precio_venta_PrimerSemestre_ProductoC').value);

    var Precio_venta_SegundoSemestre_ProductoA = parseFloat(document.getElementById('Precio_venta_SegundoSemestre_ProductoA').value);
    var Precio_venta_SegundoSemestre_ProductoB = parseFloat(document.getElementById('Precio_venta_SegundoSemestre_ProductoB').value);
    var Precio_venta_SegundoSemestre_ProductoC = parseFloat(document.getElementById('Precio_venta_SegundoSemestre_ProductoC').value);

    var Ventas_planeadas_ProductoA_PrimerSemestre = parseFloat(document.getElementById('Ventas_planeadas_ProductoA_PrimerSemestre').value);
    var Ventas_planeadas_ProductoB_PrimerSemestre = parseFloat(document.getElementById('Ventas_planeadas_ProductoB_PrimerSemestre').value);
    var Ventas_planeadas_ProductoC_PrimerSemestre = parseFloat(document.getElementById('Ventas_planeadas_ProductoC_PrimerSemestre').value);

    var Ventas_planeadas_ProductoA_SegundoSemestre = parseFloat(document.getElementById('Ventas_planeadas_ProductoA_SegundoSemestre').value);
    var Ventas_planeadas_ProductoB_SegundoSemestre = parseFloat(document.getElementById('Ventas_planeadas_ProductoB_SegundoSemestre').value);
    var Ventas_planeadas_ProductoC_SegundoSemestre = parseFloat(document.getElementById('Ventas_planeadas_ProductoC_SegundoSemestre').value);


    //Extraer datos de la tabla Gastos de administracion y ventas
    
    var DepreciacionAdministracionVentas = parseFloat(document.getElementById('DepreciacionAdministracionVentas').value);

    var SueldosAdministracionVentas = parseFloat(document.getElementById('SueldosAdministracionVentas').value);

    var ComisionesAdministracionVentas = parseFloat(document.getElementById('ComisionesAdministracionVentas').value);

    var VariosAdministracionVentas_PrimerSemestre = parseFloat(document.getElementById('VariosAdministracionVentas_PrimerSemestre').value);
    var VariosAdministracionVentas_SegundoSemestre = parseFloat(document.getElementById('VariosAdministracionVentas_SegundoSemestre').value);

    var InteresAdministracionVentas = parseFloat(document.getElementById('InteresAdministracionVentas').value);




    //Extraer datos de la tabla Gastos de fabricación indirectos

    var DepreciacionFabricacionIndirectos = parseFloat(document.getElementById('DepreciacionFabricacionIndirectos').value);
    var SegurosFabricacionIndirectos = parseFloat(document.getElementById('SegurosFabricacionIndirectos').value);

    var MantenimientoFabricacionIndirectos_PrimerSemestre = parseFloat(document.getElementById('MantenimientoFabricacionIndirectos_PrimerSemestre').value);
    var MantenimientoFabricacionIndirectos_SegundoSemestre = parseFloat(document.getElementById('MantenimientoFabricacionIndirectos_SegundoSemestre').value);

    var EnergeticosFabricacionIndirectos_PrimerSemestre = parseFloat(document.getElementById('EnergeticosFabricacionIndirectos_PrimerSemestre').value);
    var EnergeticosFabricacionIndirectos_SegundoSemestre = parseFloat(document.getElementById('EnergeticosFabricacionIndirectos_SegundoSemestre').value);

    var VariosFabricacionIndirectos = parseFloat(document.getElementById('VariosFabricacionIndirectos').value);


    //Extraer datos de la tabla Datos variables

    var Maquinaria = parseFloat(document.getElementById('Maquinaria').value);

    var Porcentaje_Clientes_Pasado = parseFloat(document.getElementById('Porcentaje_Clientes_Pasado').value);
    var Porcentaje_Ventas_Actual = parseFloat(document.getElementById('Porcentaje_Ventas_Actual').value);
    var Porcentaje_Proveedores_Pasado = parseFloat(document.getElementById('Porcentaje_Proveedores_Pasado').value);
    var Porcentaje_Compras_Actual = parseFloat(document.getElementById('Porcentaje_Compras_Actual').value);

    //Extraer datos de la tabla BALANCE GENERAL

    var Efectivo = parseFloat(document.getElementById('Efectivo').value);
    var Activos_Clientes = parseFloat(document.getElementById('Activos_Clientes').value);
    var Pasivos_Proveedores = parseFloat(document.getElementById('Pasivos_Proveedores').value);
    var DocumentosPorPagar = parseFloat(document.getElementById('DocumentosPorPagar').value);
    var ISR_Balance = parseFloat(document.getElementById('ISR').value);
    var PrestamosBancarios = parseFloat(document.getElementById('PrestamosBancarios').value);
    var InventarioMaterialesBalanceGeneral = parseFloat(document.getElementById('InventarioMaterialesBalanceGeneral').value);
    var InventarioInicialProductosTerminados_BalangeGeneral = parseFloat(document.getElementById('InventarioInicialProductosTerminados_BalangeGeneral').value);
    var Terrenos = parseFloat(document.getElementById('Terrenos').value);
    var PlantaEquipo = parseFloat(document.getElementById('PlantaEquipo').value);
    var CapitalContribuido = parseFloat(document.getElementById('CapitalContribuido').value);
    //var CapitalGanado = parseFloat(document.getElementById('CapitalGanado').value);

    //Extraer datos de la tabla Requerimiento de materiales

    var Materia_primaA_productoA = parseFloat(document.getElementById('Materia_primaA_productoA').value);
    var Materia_primaB_productoA = parseFloat(document.getElementById('Materia_primaB_productoA').value);
    var Materia_primaC_productoA = parseFloat(document.getElementById('Materia_primaC_productoA').value);

    var Materia_primaA_productoB = parseFloat(document.getElementById('Materia_primaA_productoB').value);
    var Materia_primaB_productoB = parseFloat(document.getElementById('Materia_primaB_productoB').value);
    var Materia_primaC_productoB = parseFloat(document.getElementById('Materia_primaC_productoB').value);

    var Materia_primaA_productoC = parseFloat(document.getElementById('Materia_primaA_productoC').value);
    var Materia_primaB_productoC = parseFloat(document.getElementById('Materia_primaB_productoC').value);
    var Materia_primaC_productoC = parseFloat(document.getElementById('Materia_primaC_productoC').value);

    var ManoDeObraHora_ProductoA = parseFloat(document.getElementById('ManoDeObraHora_ProductoA').value);
    var ManoDeObraHora_ProductoB = parseFloat(document.getElementById('ManoDeObraHora_ProductoB').value);
    var ManoDeObraHora_ProductoC = parseFloat(document.getElementById('ManoDeObraHora_ProductoC').value);

    //Extraer datos de la tabla Requerimiento de materiales

    var CuotaManoDeObra_PrimerSemestre = parseFloat(document.getElementById('CuotaManoDeObra_PrimerSemestre').value);
    var CuotaManoDeObra_SegundoSemestre = parseFloat(document.getElementById('CuotaManoDeObra_SegundoSemestre').value);

    //Extraer las celdas de la tabla 1. Presupuesto de ventas
    var Precio_venta_ProductoA_PrimerSemestre_celda = document.getElementById("Precio_venta_ProductoA_PrimerSemestre");
    var Precio_venta_ProductoB_PrimerSemestre_celda = document.getElementById("Precio_venta_ProductoB_PrimerSemestre");
    var Precio_venta_ProductoC_PrimerSemestre_celda = document.getElementById("Precio_venta_ProductoC_PrimerSemestre");

    var Precio_venta_ProductoA_SegundoSemestre_celda = document.getElementById("Precio_venta_ProductoA_SegundoSemestre");
    var Precio_venta_ProductoB_SegundoSemestre_celda = document.getElementById("Precio_venta_ProductoB_SegundoSemestre");
    var Precio_venta_ProductoC_SegundoSemestre_celda = document.getElementById("Precio_venta_ProductoC_SegundoSemestre");

    var Unidades_vender_ProductoA_primer_semestre_celda = document.getElementById("Unidades_vender_ProductoA_primer_semestre");
    var Unidades_vender_ProductoB_primer_semestre_celda = document.getElementById("Unidades_vender_ProductoB_primer_semestre");
    var Unidades_vender_ProductoC_primer_semestre_celda = document.getElementById("Unidades_vender_ProductoC_primer_semestre");

    var Unidades_vender_ProductoA_segundo_semestre_celda = document.getElementById("Unidades_vender_ProductoA_segundo_semestre");
    var Unidades_vender_ProductoB_segundo_semestre_celda = document.getElementById("Unidades_vender_ProductoB_segundo_semestre");
    var Unidades_vender_ProductoC_segundo_semestre_celda = document.getElementById("Unidades_vender_ProductoC_segundo_semestre");

    var Importe_venta_ProductoA_PrimerSemestre_celda = document.getElementById("Importe_venta_ProductoA_PrimerSemestre");
    var Importe_venta_ProductoB_PrimerSemestre_celda = document.getElementById("Importe_venta_ProductoB_PrimerSemestre");
    var Importe_venta_ProductoC_PrimerSemestre_celda = document.getElementById("Importe_venta_ProductoC_PrimerSemestre");

    var Importe_venta_ProductoA_SegundoSemestre_celda = document.getElementById("Importe_venta_ProductoA_SegundoSemestre");
    var Importe_venta_ProductoB_SegundoSemestre_celda = document.getElementById("Importe_venta_ProductoB_SegundoSemestre");
    var Importe_venta_ProductoC_SegundoSemestre_celda = document.getElementById("Importe_venta_ProductoC_SegundoSemestre");

    var VentasAnuales_ProductoA_celda = document.getElementById("VentasAnuales_ProductoA");
    var VentasAnuales_ProductoB_celda = document.getElementById("VentasAnuales_ProductoB");
    var VentasAnuales_ProductoC_celda = document.getElementById("VentasAnuales_ProductoC");

    var Total_ventas_PrimerSemestre_celda = document.getElementById("Total_ventas_PrimerSemestre");
    var Total_ventas_SegundoSemestre_celda = document.getElementById("Total_ventas_SegundoSemestre");
    var TotalVentasAnuales_celda = document.getElementById("TotalVentasAnuales");

    //Extraer las celdas de la tabla  2. Determinación del saldo de Clientes y Flujo de Entradas
    
    var Saldo_Cliente_Pasado_celda = document.getElementById("Saldo_Cliente_Pasado");
    var TotalVentasAnuales_BalanceGeneral_celda = document.getElementById("TotalVentasAnuales_BalanceGeneral");
    var Total_Clientes_Actual_celda = document.getElementById("Total_Clientes_Actual");
    var PorCobrar_Pasado_celda = document.getElementById("PorCobrar_Pasado");
    var PorCobrar_Actual_celda = document.getElementById("PorCobrar_Actual");
    var Total_Entradas_Actual_celda = document.getElementById("Total_Entradas_Actual");
    var Saldo_Clientes_Actual_celda = document.getElementById("Saldo_Clientes_Actual");

    //Extraer las celdas de la tabla  3. Presupuesto de Producción
    
    var Unidades_a_vender_productoA_PrimerSemestre_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoA_PrimerSemestre_PresupuestoProduccion");
    var Unidades_a_vender_productoA_SegundoSemestre_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoA_SegundoSemestre_PresupuestoProduccion");
    var Unidades_a_vender_productoA_Anual_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoA_Anual_PresupuestoProduccion");
    var Inventario_final_productoA_PrimerSemestre_celda = document.getElementById("Inventario_final_productoA_PrimerSemestre");
    var Inventario_final_productoA_SegundoSemestre_celda = document.getElementById("Inventario_final_productoA_SegundoSemestre");
    var Inventario_final_productoA_Anual_celda = document.getElementById("Inventario_final_productoA_Anual");
    var Total_unidades_productoA_PrimerSemestre_celda = document.getElementById("Total_unidades_productoA_PrimerSemestre");
    var Total_unidades_productoA_SegundoSemestre_celda = document.getElementById("Total_unidades_productoA_SegundoSemestre");
    var Total_Unidades_productoA_Anuales_celda = document.getElementById("Total_Unidades_productoA_Anuales");
    var Inventario_inicial_productoA_PrimerSemestre_PresupuestoProduccion_celda = document.getElementById("Inventario_inicial_productoA_PrimerSemestre_PresupuestoProduccion");
    var Inventario_inicial_productoA_SegundoSemestre_PresupuestoProduccion_celda = document.getElementById("Inventario_inicial_productoA_SegundoSemestre_PresupuestoProduccion");
    var Inventario_inicial_productoA_Anual_PresupuesProduccion_celda = document.getElementById("Inventario_inicial_productoA_Anual_PresupuesProduccion");
    var Unidades_a_producir_productoA_PrimerSemestre_celda = document.getElementById("Unidades_a_producir_productoA_PrimerSemestre");
    var Unidades_a_producir_productoA_SegundoSemestre_celda = document.getElementById("Unidades_a_producir_productoA_SegundoSemestre");
    var Total_Unidades_Producir_productoA_Anual_celda = document.getElementById("Total_Unidades_Producir_productoA_Anual");

    var Unidades_a_vender_productoB_PrimerSemestre_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoB_PrimerSemestre_PresupuestoProduccion");
    var Unidades_a_vender_productoB_SegundoSemestre_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoB_SegundoSemestre_PresupuestoProduccion");
    var Unidades_a_vender_productoB_Anual_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoB_Anual_PresupuestoProduccion");

    var Inventario_final_productoB_PrimerSemestre_celda = document.getElementById("Inventario_final_productoB_PrimerSemestre");
    var Inventario_final_productoB_SegundoSemestre_celda = document.getElementById("Inventario_final_productoB_SegundoSemestre");
    var Inventario_final_productoB_Anual_celda = document.getElementById("Inventario_final_productoB_Anual");

    var Total_unidades_productoB_PrimerSemestre_celda = document.getElementById("Total_unidades_productoB_PrimerSemestre");
    var Total_unidades_productoB_SegundoSemestre_celda = document.getElementById("Total_unidades_productoB_SegundoSemestre");
    var Total_Unidades_productoB_Anuales_celda = document.getElementById("Total_Unidades_productoB_Anuales");

    var Inventario_inicial_productoB_PrimerSemestre_PresupuestoProduccion_celda = document.getElementById("Inventario_inicial_productoB_PrimerSemestre_PresupuestoProduccion");
    var Inventario_inicial_productoB_SegundoSemestre_PresupuestoProduccion_celda = document.getElementById("Inventario_inicial_productoB_SegundoSemestre_PresupuestoProduccion");
    var Inventario_inicial_productoB_Anual_PresupuesProduccion_celda = document.getElementById("Inventario_inicial_productoB_Anual_PresupuesProduccion");

    var Unidades_a_producir_productoB_PrimerSemestre_celda = document.getElementById("Unidades_a_producir_productoB_PrimerSemestre");
    var Unidades_a_producir_productoB_SegundoSemestre_celda = document.getElementById("Unidades_a_producir_productoB_SegundoSemestre");
    var Total_Unidades_Producir_productoB_Anual_celda = document.getElementById("Total_Unidades_Producir_productoB_Anual");


    var Unidades_a_vender_productoC_PrimerSemestre_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoC_PrimerSemestre_PresupuestoProduccion");
    var Unidades_a_vender_productoC_SegundoSemestre_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoC_SegundoSemestre_PresupuestoProduccion");
    var Unidades_a_vender_productoC_Anual_PresupuestoProduccion_celda = document.getElementById("Unidades_a_vender_productoC_Anual_PresupuestoProduccion");

    var Inventario_final_productoC_PrimerSemestre_celda = document.getElementById("Inventario_final_productoC_PrimerSemestre");
    var Inventario_final_productoC_SegundoSemestre_celda = document.getElementById("Inventario_final_productoC_SegundoSemestre");
    var Inventario_final_productoC_Anual_celda = document.getElementById("Inventario_final_productoC_Anual");

    var Total_unidades_productoC_PrimerSemestre_celda = document.getElementById("Total_unidades_productoC_PrimerSemestre");
    var Total_unidades_productoC_SegundoSemestre_celda = document.getElementById("Total_unidades_productoC_SegundoSemestre");
    var Total_Unidades_productoC_Anuales_celda = document.getElementById("Total_Unidades_productoC_Anuales");

    var Inventario_inicial_productoC_PrimerSemestre_PresupuestoProduccion_celda = document.getElementById("Inventario_inicial_productoC_PrimerSemestre_PresupuestoProduccion");
    var Inventario_inicial_productoC_SegundoSemestre_PresupuestoProduccion_celda = document.getElementById("Inventario_inicial_productoC_SegundoSemestre_PresupuestoProduccion");
    var Inventario_inicial_productoC_Anual_PresupuesProduccion_celda = document.getElementById("Inventario_inicial_productoC_Anual_PresupuesProduccion");

    var Unidades_a_producir_productoC_PrimerSemestre_celda = document.getElementById("Unidades_a_producir_productoC_PrimerSemestre");
    var Unidades_a_producir_productoC_SegundoSemestre_celda = document.getElementById("Unidades_a_producir_productoC_SegundoSemestre");
    var Total_Unidades_Producir_productoC_Anual_celda = document.getElementById("Total_Unidades_Producir_productoC_Anual");

    //Extraer las celdas de la tabla  4. Presupuesto de Requerimiento de Materiales

    var Unidades_a_producir_productoA_PrimerSemestre_RequerimientoMateriales_celda = document.getElementById("Unidades_a_producir_productoA_PrimerSemestre_RequerimientoMateriales");
    var Unidades_a_producir_productoA_SegundoSemestre_RequerimientoMateriales_celda = document.getElementById("Unidades_a_producir_productoA_SegundoSemestre_RequerimientoMateriales");
    var Total_Unidades_Producir_productoA_Anual_RequerimientoMateriales_celda = document.getElementById("Total_Unidades_Producir_productoA_Anual_RequerimientoMateriales");

    var MaterialA_productoA_PrimerSemestre_celda = document.getElementById("MaterialA_productoA_PrimerSemestre");
    var MaterialA_productoA_SegundoSemestre_celda = document.getElementById("MaterialA_productoA_SegundoSemestre");
    var MaterialA_productoA_Anual_celda = document.getElementById("MaterialA_productoA_Anual");

    var Total_materialA_productoA_PrimerSemestre_celda = document.getElementById("Total_materialA_productoA_PrimerSemestre");
    var Total_materialA_productoA_SegundoSemestre_celda = document.getElementById("Total_materialA_productoA_SegundoSemestre");
    var TotalA_material_productoA_Anual_celda = document.getElementById("TotalA_material_productoA_Anual");

    var MaterialB_productoA_PrimerSemestre_celda = document.getElementById("MaterialB_productoA_PrimerSemestre");
    var MaterialB_productoA_SegundoSemestre_celda = document.getElementById("MaterialB_productoA_SegundoSemestre");
    var MaterialB_productoA_Anual_celda = document.getElementById("MaterialB_productoA_Anual");

    var Total_materialB_productoA_PrimerSemestre_celda = document.getElementById("Total_materialB_productoA_PrimerSemestre");
    var Total_materialB_productoA_SegundoSemestre_celda = document.getElementById("Total_materialB_productoA_SegundoSemestre");
    var TotalA_materialB_productoA_Anual_celda = document.getElementById("TotalA_materialB_productoA_Anual");

    var MaterialC_productoA_PrimerSemestre_celda = document.getElementById("MaterialC_productoA_PrimerSemestre");
    var MaterialC_productoA_SegundoSemestre_celda = document.getElementById("MaterialC_productoA_SegundoSemestre");
    var MaterialC_productoA_Anual_celda = document.getElementById("MaterialC_productoA_Anual");

    var Total_materialC_productoA_PrimerSemestre_celda = document.getElementById("Total_materialC_productoA_PrimerSemestre");
    var Total_materialC_productoA_SegundoSemestre_celda = document.getElementById("Total_materialC_productoA_SegundoSemestre");
    var TotalA_materialC_productoA_Anual_celda = document.getElementById("TotalA_materialC_productoA_Anual");


    var Unidades_a_producir_productoB_PrimerSemestre_RequerimientoMateriales_celda = document.getElementById("Unidades_a_producir_productoB_PrimerSemestre_RequerimientoMateriales");
    var Unidades_a_producir_productoB_SegundoSemestre_RequerimientoMateriales_celda = document.getElementById("Unidades_a_producir_productoB_SegundoSemestre_RequerimientoMateriales");
    var Total_Unidades_Producir_productoB_Anual_RequerimientoMateriales_celda = document.getElementById("Total_Unidades_Producir_productoB_Anual_RequerimientoMateriales");

    var MaterialA_productoB_PrimerSemestre_celda = document.getElementById("MaterialA_productoB_PrimerSemestre");
    var MaterialA_productoB_SegundoSemestre_celda = document.getElementById("MaterialA_productoB_SegundoSemestre");
    var MaterialA_productoB_Anual_celda = document.getElementById("MaterialA_productoB_Anual");

    var Total_materialA_productoB_PrimerSemestre_celda = document.getElementById("Total_materialA_productoB_PrimerSemestre");
    var Total_materialA_productoB_SegundoSemestre_celda = document.getElementById("Total_materialA_productoB_SegundoSemestre");
    var TotalA_materialA_productoB_Anual_celda = document.getElementById("TotalA_materialA_productoB_Anual");

    var MaterialB_productoB_PrimerSemestre_celda = document.getElementById("MaterialB_productoB_PrimerSemestre");
    var MaterialB_productoB_SegundoSemestre_celda = document.getElementById("MaterialB_productoB_SegundoSemestre");
    var MaterialB_productoB_Anual_celda = document.getElementById("MaterialB_productoB_Anual");

    var Total_materialB_productoB_PrimerSemestre_celda = document.getElementById("Total_materialB_productoB_PrimerSemestre");
    var Total_materialB_productoB_SegundoSemestre_celda = document.getElementById("Total_materialB_productoB_SegundoSemestre");
    var TotalA_materialB_productoB_Anual_celda = document.getElementById("TotalA_materialB_productoB_Anual");

    var MaterialC_productoB_PrimerSemestre_celda = document.getElementById("MaterialC_productoB_PrimerSemestre");
    var MaterialC_productoB_SegundoSemestre_celda = document.getElementById("MaterialC_productoB_SegundoSemestre");
    var MaterialC_productoB_Anual_celda = document.getElementById("MaterialC_productoB_Anual");

    var Total_materialC_productoB_PrimerSemestre_celda = document.getElementById("Total_materialC_productoB_PrimerSemestre");
    var Total_materialC_productoB_SegundoSemestre_celda = document.getElementById("Total_materialC_productoB_SegundoSemestre");
    var TotalA_materialC_productoB_Anual_celda = document.getElementById("TotalA_materialC_productoB_Anual");


    var Unidades_a_producir_productoC_PrimerSemestre_RequerimientoMateriales_celda = document.getElementById("Unidades_a_producir_productoC_PrimerSemestre_RequerimientoMateriales");
    var Unidades_a_producir_productoC_SegundoSemestre_RequerimientoMateriales_celda = document.getElementById("Unidades_a_producir_productoC_SegundoSemestre_RequerimientoMateriales");
    var Total_Unidades_Producir_productoC_Anual_RequerimientoMateriales_celda = document.getElementById("Total_Unidades_Producir_productoC_Anual_RequerimientoMateriales");

    var MaterialA_productoC_PrimerSemestre_celda = document.getElementById("MaterialA_productoC_PrimerSemestre");
    var MaterialA_productoC_SegundoSemestre_celda = document.getElementById("MaterialA_productoC_SegundoSemestre");
    var MaterialA_productoC_Anual_celda = document.getElementById("MaterialA_productoC_Anual");

    var Total_materialA_productoC_PrimerSemestre_celda = document.getElementById("Total_materialA_productoC_PrimerSemestre");
    var Total_materialA_productoC_SegundoSemestre_celda = document.getElementById("Total_materialA_productoC_SegundoSemestre");
    var TotalA_materialA_productoC_Anual_celda = document.getElementById("TotalA_materialA_productoC_Anual");

    var MaterialB_productoC_PrimerSemestre_celda = document.getElementById("MaterialB_productoC_PrimerSemestre");
    var MaterialB_productoC_SegundoSemestre_celda = document.getElementById("MaterialB_productoC_SegundoSemestre");
    var MaterialB_productoC_Anual_celda = document.getElementById("MaterialB_productoC_Anual");

    var Total_materialB_productoC_PrimerSemestre_celda = document.getElementById("Total_materialB_productoC_PrimerSemestre");
    var Total_materialB_productoC_SegundoSemestre_celda = document.getElementById("Total_materialB_productoC_SegundoSemestre");
    var TotalA_materialB_productoC_Anual_celda = document.getElementById("TotalA_materialB_productoC_Anual");

    var MaterialC_productoC_PrimerSemestre_celda = document.getElementById("MaterialC_productoC_PrimerSemestre");
    var MaterialC_productoC_SegundoSemestre_celda = document.getElementById("MaterialC_productoC_SegundoSemestre");
    var MaterialC_productoC_Anual_celda = document.getElementById("MaterialC_productoC_Anual");

    var Total_materialC_productoC_PrimerSemestre_celda = document.getElementById("Total_materialC_productoC_PrimerSemestre");
    var Total_materialC_productoC_SegundoSemestre_celda = document.getElementById("Total_materialC_productoC_SegundoSemestre");
    var TotalA_materialC_productoC_Anual_celda = document.getElementById("TotalA_materialC_productoC_Anual");


    var Total_materialA_PrimerSemestre_celda = document.getElementById("Total_materialA_PrimerSemestre");
    var Total_materialA_SegundoSemestre_celda = document.getElementById("Total_materialA_SegundoSemestre");
    var Total_materialA_Anual_celda = document.getElementById("Total_materialA_Anual");

    var Total_materialB_PrimerSemestre_celda = document.getElementById("Total_materialB_PrimerSemestre");
    var Total_materialB_SegundoSemestre_celda = document.getElementById("Total_materialB_SegundoSemestre");
    var Total_materialB_Anual_celda = document.getElementById("Total_materialB_Anual");

    var Total_materialC_PrimerSemestre_celda = document.getElementById("Total_materialC_PrimerSemestre");
    var Total_materialC_SegundoSemestre_celda = document.getElementById("Total_materialC_SegundoSemestre");
    var Total_materialC_Anual_celda = document.getElementById("Total_materialC_Anual");

    //Extraer las celdas de la tabla  5. Presupuesto de Compra de Materiales

    var TotalA_PrimerSemestre_celda = document.getElementById("TotalA_PrimerSemestre");
    var TotalA_SegundoSemestre_celda = document.getElementById("TotalA_SegundoSemestre");
    var TotalA_Anual_celda = document.getElementById("TotalA_Anual");

    var Inventario_final_MaterialA_PrimerSemestre_celda = document.getElementById("Inventario_final_MaterialA_PrimerSemestre");
    var Inventario_final_MaterialA_SegundoSemestre_celda = document.getElementById("Inventario_final_MaterialA_SegundoSemestre");
    var Inventario_final_MaterialA_Anual_celda = document.getElementById("Inventario_final_MaterialA_Anual");

    var Total_de_MaterialA_PrimerSemestre_celda = document.getElementById("Total_de_MaterialA_PrimerSemestre");
    var Total_de_MaterialA_SegundoSemestre_celda = document.getElementById("Total_de_MaterialA_SegundoSemestre");
    var Total_de_MaterialA_Anual_celda = document.getElementById("Total_de_MaterialA_Anual");

    var Inventario_inicial_MaterialA_PrimerSemestre_celda = document.getElementById("Inventario_inicial_MaterialA_PrimerSemestre");
    var Inventario_inicial_MaterialA_SegundoSemestre_celda = document.getElementById("Inventario_inicial_MaterialA_SegundoSemestre");
    var Inventario_inicial_MaterialA_Anual_celda = document.getElementById("Inventario_inicial_MaterialA_Anual");

    var Material_comprar_MaterialA_PrimerSemestre_celda = document.getElementById("Material_comprar_MaterialA_PrimerSemestre");
    var Material_comprar_MaterialA_SegundoSemestre_celda = document.getElementById("Material_comprar_MaterialA_SegundoSemestre");
    var Material_comprar_MaterialA_Anual_celda = document.getElementById("Material_comprar_MaterialA_Anual");

    var Precio_compra_MaterialA_PrimerSemestre_celda = document.getElementById("Precio_compra_MaterialA_PrimerSemestre");
    var Precio_compra_MaterialA_SegundoSemestre_celda = document.getElementById("Precio_compra_MaterialA_SegundoSemestre");

    var Total_precio_MaterialA_PrimerSemestre_celda = document.getElementById("Total_precio_MaterialA_PrimerSemestre");
    var Total_precio_MaterialA_SegundoSemestre_celda = document.getElementById("Total_precio_MaterialA_SegundoSemestre");
    var Total_precio_MaterialA_Anual_celda = document.getElementById("Total_precio_MaterialA_Anual");


    var TotalB_PrimerSemestre_celda = document.getElementById("TotalB_PrimerSemestre");
    var TotalB_SegundoSemestre_celda = document.getElementById("TotalB_SegundoSemestre");
    var TotalB_Anual_celda = document.getElementById("TotalB_Anual");

    var Inventario_final_MaterialB_PrimerSemestre_celda = document.getElementById("Inventario_final_MaterialB_PrimerSemestre");
    var Inventario_final_MaterialB_SegundoSemestre_celda = document.getElementById("Inventario_final_MaterialB_SegundoSemestre");
    var Inventario_final_MaterialB_Anual_celda = document.getElementById("Inventario_final_MaterialB_Anual");

    var Total_de_MaterialB_PrimerSemestre_celda = document.getElementById("Total_de_MaterialB_PrimerSemestre");
    var Total_de_MaterialB_SegundoSemestre_celda = document.getElementById("Total_de_MaterialB_SegundoSemestre");
    var Total_de_MaterialB_Anual_celda = document.getElementById("Total_de_MaterialB_Anual");

    var Inventario_inicial_MaterialB_PrimerSemestre_celda = document.getElementById("Inventario_inicial_MaterialB_PrimerSemestre");
    var Inventario_inicial_MaterialB_SegundoSemestre_celda = document.getElementById("Inventario_inicial_MaterialB_SegundoSemestre");
    var Inventario_inicial_MaterialB_Anual_celda = document.getElementById("Inventario_inicial_MaterialB_Anual");

    var Material_comprar_MaterialB_PrimerSemestre_celda = document.getElementById("Material_comprar_MaterialB_PrimerSemestre");
    var Material_comprar_MaterialB_SegundoSemestre_celda = document.getElementById("Material_comprar_MaterialB_SegundoSemestre");
    var Material_comprar_MaterialB_Anual_celda = document.getElementById("Material_comprar_MaterialB_Anual");

    var Precio_compra_MaterialB_PrimerSemestre_celda = document.getElementById("Precio_compra_MaterialB_PrimerSemestre");
    var Precio_compra_MaterialB_SegundoSemestre_celda = document.getElementById("Precio_compra_MaterialB_SegundoSemestre");

    var Total_precio_MaterialB_PrimerSemestre_celda = document.getElementById("Total_precio_MaterialB_PrimerSemestre");
    var Total_precio_MaterialB_SegundoSemestre_celda = document.getElementById("Total_precio_MaterialB_SegundoSemestre");
    var Total_precio_MaterialB_Anual_celda = document.getElementById("Total_precio_MaterialB_Anual");

    

    var TotalC_PrimerSemestre_celda = document.getElementById("TotalC_PrimerSemestre");
    var TotalC_SegundoSemestre_celda = document.getElementById("TotalC_SegundoSemestre");
    var TotalC_Anual_celda = document.getElementById("TotalC_Anual");

    var Inventario_final_MaterialC_PrimerSemestre_celda = document.getElementById("Inventario_final_MaterialC_PrimerSemestre");
    var Inventario_final_MaterialC_SegundoSemestre_celda = document.getElementById("Inventario_final_MaterialC_SegundoSemestre");
    var Inventario_final_MaterialC_Anual_celda = document.getElementById("Inventario_final_MaterialC_Anual");

    var Total_de_MaterialC_PrimerSemestre_celda = document.getElementById("Total_de_MaterialC_PrimerSemestre");
    var Total_de_MaterialC_SegundoSemestre_celda = document.getElementById("Total_de_MaterialC_SegundoSemestre");
    var Total_de_MaterialC_Anual_celda = document.getElementById("Total_de_MaterialC_Anual");

    var Inventario_inicial_MaterialC_PrimerSemestre_celda = document.getElementById("Inventario_inicial_MaterialC_PrimerSemestre");
    var Inventario_inicial_MaterialC_SegundoSemestre_celda = document.getElementById("Inventario_inicial_MaterialC_SegundoSemestre");
    var Inventario_inicial_MaterialC_Anual_celda = document.getElementById("Inventario_inicial_MaterialC_Anual");

    var Material_comprar_MaterialC_PrimerSemestre_celda = document.getElementById("Material_comprar_MaterialC_PrimerSemestre");
    var Material_comprar_MaterialC_SegundoSemestre_celda = document.getElementById("Material_comprar_MaterialC_SegundoSemestre");
    var Material_comprar_MaterialC_Anual_celda = document.getElementById("Material_comprar_MaterialC_Anual");

    var Precio_compra_MaterialC_PrimerSemestre_celda = document.getElementById("Precio_compra_MaterialC_PrimerSemestre");
    var Precio_compra_MaterialC_SegundoSemestre_celda = document.getElementById("Precio_compra_MaterialC_SegundoSemestre");

    var Total_precio_MaterialC_PrimerSemestre_celda = document.getElementById("Total_precio_MaterialC_PrimerSemestre");
    var Total_precio_MaterialC_SegundoSemestre_celda = document.getElementById("Total_precio_MaterialC_SegundoSemestre");
    var Total_precio_MaterialC_Anual_celda = document.getElementById("Total_precio_MaterialC_Anual");



    var Total_precio_Material_PrimerSemeste_celda = document.getElementById("Total_precio_Material_PrimerSemeste");
    var Total_precio_Material_SegundoSemeste_celda = document.getElementById("Total_precio_Material_SegundoSemeste");
    var Total_precio_Material_Anual_celda = document.getElementById("Total_precio_Material_Anual");

    //Extraer las celdas de la tabla  6. Determinación del saldo de Proveedores y Flujo de Salidas

    var Saldo_Proveedores_Pasado_celda = document.getElementById("Saldo_Proveedores_Pasado");
    var Total_Compras_Actual_celda = document.getElementById("Total_Compras_Actual");
    var Total_proveedores_Actual_celda = document.getElementById("Total_proveedores_Actual");

    var PorProveedor_Pasado_celda = document.getElementById("PorProveedor_Pasado");
    var PorCompras_Actual_celda = document.getElementById("PorCompras_Actual");
    var Total_Salidas_Actual_celda = document.getElementById("Total_Salidas_Actual");

    var Saldo_Proveedores_Actual_celda = document.getElementById("Saldo_Proveedores_Actual");

    //Extraer las celdas de la tabla  7. Presupuesto de Mano de Obra Directa

    var ProduccionProductoA_PrimerSemestre_celda = document.getElementById("ProduccionProductoA_PrimerSemestre");
    var ProduccionProductoA_SegundoSemestre_celda = document.getElementById("ProduccionProductoA_SegundoSemestre");
    var ProduccionProductoA_Anual_celda = document.getElementById("ProduccionProductoA_Anual");

    var HorasProductoA_PrimerSemestre_celda = document.getElementById("HorasProductoA_PrimerSemestre");
    var HorasProductoA_SegundoSemestre_celda = document.getElementById("HorasProductoA_SegundoSemestre");
    var HorasProductoA_Anual_celda = document.getElementById("HorasProductoA_Anual");

    var TotalHorasProductoA_PrimerSemestre_celda = document.getElementById("TotalHorasProductoA_PrimerSemestre");
    var TotalHorasProductoA_SegundoSemestre_celda = document.getElementById("TotalHorasProductoA_SegundoSemestre");
    var TotalHorasProductoA_Anual_celda = document.getElementById("TotalHorasProductoA_Anual");

    var CuotaHoraProductoA_PrimerSemestre_celda = document.getElementById("CuotaHoraProductoA_PrimerSemestre");
    var CuotaHoraProductoA_SegundoSemestre_celda = document.getElementById("CuotaHoraProductoA_SegundoSemestre");

    var ImporteMODProductoA_PrimerSemestre_celda = document.getElementById("ImporteMODProductoA_PrimerSemestre");
    var ImporteMODProductoA_SegundoSemestre_celda = document.getElementById("ImporteMODProductoA_SegundoSemestre");
    var ImporteMODProductoA_Anual_celda = document.getElementById("ImporteMODProductoA_Anual");




    var ProduccionProductoB_PrimerSemestre_celda = document.getElementById("ProduccionProductoB_PrimerSemestre");
    var ProduccionProductoB_SegundoSemestre_celda = document.getElementById("ProduccionProductoB_SegundoSemestre");
    var ProduccionProductoB_Anual_celda = document.getElementById("ProduccionProductoB_Anual");

    var HorasProductoB_PrimerSemestre_celda = document.getElementById("HorasProductoB_PrimerSemestre");
    var HorasProductoB_SegundoSemestre_celda = document.getElementById("HorasProductoB_SegundoSemestre");
    var HorasProductoB_Anual_celda = document.getElementById("HorasProductoB_Anual");

    var TotalHorasProductoB_PrimerSemestre_celda = document.getElementById("TotalHorasProductoB_PrimerSemestre");
    var TotalHorasProductoB_SegundoSemestre_celda = document.getElementById("TotalHorasProductoB_SegundoSemestre");
    var TotalHorasProductoB_Anual_celda = document.getElementById("TotalHorasProductoB_Anual");

    var CuotaHoraProductoB_PrimerSemestre_celda = document.getElementById("CuotaHoraProductoB_PrimerSemestre");
    var CuotaHoraProductoB_SegundoSemestre_celda = document.getElementById("CuotaHoraProductoB_SegundoSemestre");

    var ImporteMODProductoB_PrimerSemestre_celda = document.getElementById("ImporteMODProductoB_PrimerSemestre");
    var ImporteMODProductoB_SegundoSemestre_celda = document.getElementById("ImporteMODProductoB_SegundoSemestre");
    var ImporteMODProductoB_Anual_celda = document.getElementById("ImporteMODProductoB_Anual");




    var ProduccionProductoC_PrimerSemestre_celda = document.getElementById("ProduccionProductoC_PrimerSemestre");
    var ProduccionProductoC_SegundoSemestre_celda = document.getElementById("ProduccionProductoC_SegundoSemestre");
    var ProduccionProductoC_Anual_celda = document.getElementById("ProduccionProductoC_Anual");

    var HorasProductoC_PrimerSemestre_celda = document.getElementById("HorasProductoC_PrimerSemestre");
    var HorasProductoC_SegundoSemestre_celda = document.getElementById("HorasProductoC_SegundoSemestre");
    var HorasProductoC_Anual_celda = document.getElementById("HorasProductoC_Anual");

    var TotalHorasProductoC_PrimerSemestre_celda = document.getElementById("TotalHorasProductoC_PrimerSemestre");
    var TotalHorasProductoC_SegundoSemestre_celda = document.getElementById("TotalHorasProductoC_SegundoSemestre");
    var TotalHorasProductoC_Anual_celda = document.getElementById("TotalHorasProductoC_Anual");

    var CuotaHoraProductoC_PrimerSemestre_celda = document.getElementById("CuotaHoraProductoC_PrimerSemestre");
    var CuotaHoraProductoC_SegundoSemestre_celda = document.getElementById("CuotaHoraProductoC_SegundoSemestre");

    var ImporteMODProductoC_PrimerSemestre_celda = document.getElementById("ImporteMODProductoC_PrimerSemestre");
    var ImporteMODProductoC_SegundoSemestre_celda = document.getElementById("ImporteMODProductoC_SegundoSemestre");
    var ImporteMODProductoC_Anual_celda = document.getElementById("ImporteMODProductoC_Anual");
    




    var TotalHoras_PrimerSemestre_celda = document.getElementById("TotalHoras_PrimerSemestre");
    var TotalHoras_SegundoSemestre_celda = document.getElementById("TotalHoras_SegundoSemestre");
    var TotalHoras_Anual_celda = document.getElementById("TotalHoras_Anual");



    var TotalMOD_PrimerSemestre_celda = document.getElementById("TotalMOD_PrimerSemestre");
    var TotalMOD_SegundoSemestre_celda = document.getElementById("TotalMOD_SegundoSemestre");
    var TotalMOD_Anual_celda = document.getElementById("TotalMOD_Anual");

    //Extraer las celdas de la tabla 8. Presupuesto de Gastos Indirectos de Fabricación

    var DepreciacionFI_PrimerSemestre_celda = document.getElementById("DepreciacionFI_PrimerSemestre");
    var DepreciacionFI_SegundoSemestre_celda = document.getElementById("DepreciacionFI_SegundoSemestre");
    var DepreciacionFI_Anual_celda = document.getElementById("DepreciacionFI_Anual");

    var SegurosFI_PrimerSemestre_celda = document.getElementById("SegurosFI_PrimerSemestre");
    var SegurosFI_SegundoSemestre_celda = document.getElementById("SegurosFI_SegundoSemestre");
    var SegurosFI_Anual_celda = document.getElementById("SegurosFI_Anual");

    var MantenimientoFI_PrimerSemestre_celda = document.getElementById("MantenimientoFI_PrimerSemestre");
    var MantenimientoFI_SegundoSemestre_celda = document.getElementById("MantenimientoFI_SegundoSemestre");
    var MantenimientoFI_Anual_celda = document.getElementById("MantenimientoFI_Anual");

    var EnergeticosFI_PrimerSemestre_celda = document.getElementById("EnergeticosFI_PrimerSemestre");
    var EnergeticosFI_SegundoSemestre_celda = document.getElementById("EnergeticosFI_SegundoSemestre");
    var EnergeticosFI_Anual_celda = document.getElementById("EnergeticosFI_Anual");

    var VariosFI_PrimerSemestre_celda = document.getElementById("VariosFI_PrimerSemestre");
    var VariosFI_SegundoSemestre_celda = document.getElementById("VariosFI_SegundoSemestre");
    var VariosFI_Anual_celda = document.getElementById("VariosFI_Anual");

    var TotalGIF_PrimerSemestre_celda = document.getElementById("TotalGIF_PrimerSemestre");
    var TotalGIF_SegundoSemestre_celda = document.getElementById("TotalGIF_SegundoSemestre");
    var TotalGIF_Anual_celda = document.getElementById("TotalGIF_Anual");


    var TotalGIF_Coeficiente_celda = document.getElementById("TotalGIF_Coeficiente");

    var TotalMOD_Coeficiente_celda = document.getElementById("TotalMOD_Coeficiente");

    var CostoHoraGIF_Coeficiente_celda = document.getElementById("CostoHoraGIF_Coeficiente");

    //Extraer las celdas de la tabla 9. Presupuesto de Gastos de Operación

    var DepreciacionGO_PrimerSemestre_celda = document.getElementById("DepreciacionGO_PrimerSemestre");
    var DepreciacionGO_SegundoSemestre_celda = document.getElementById("DepreciacionGO_SegundoSemestre");
    var DepreciacionGO_Anual_celda = document.getElementById("DepreciacionGO_Anual");

    var SueldosGO_PrimerSemestre_celda = document.getElementById("SueldosGO_PrimerSemestre");
    var SueldosGO_SegundoSemestre_celda = document.getElementById("SueldosGO_SegundoSemestre");
    var SueldosGO_Anual_celda = document.getElementById("SueldosGO_Anual");

    var ComisionesGO_PrimerSemestre_celda = document.getElementById("ComisionesGO_PrimerSemestre");
    var ComisionesGO_SegundoSemestre_celda = document.getElementById("ComisionesGO_SegundoSemestre");
    var ComisionesGO_Anual_celda = document.getElementById("ComisionesGO_Anual");

    var VariosGO_PrimerSemestre_celda = document.getElementById("VariosGO_PrimerSemestre");
    var VariosGO_SegundoSemestre_celda = document.getElementById("VariosGO_SegundoSemestre");
    var VariosGO_Anual_celda = document.getElementById("VariosGO_Anual");

    var InteresesGO_PrimerSemestre_celda = document.getElementById("InteresesGO_PrimerSemestre");
    var InteresesGO_SegundoSemestre_celda = document.getElementById("InteresesGO_SegundoSemestre");
    var InteresesGO_Anual_celda = document.getElementById("InteresesGO_Anual");

    var TotalGO_PrimerSemestre_celda = document.getElementById("TotalGO_PrimerSemestre");
    var TotalGO_SegundoSemestre_celda = document.getElementById("TotalGO_SegundoSemestre");
    var TotalGO_Anual_celda = document.getElementById("TotalGO_Anual");

    //Extraer las celdas de la tabla 10. Determinación del Costo Unitario de Productos Terminados

    var CostoMaterialA_ProductoA_celda = document.getElementById("CostoMaterialA_ProductoA");
    var CantidadMaterialA_ProductoA_celda = document.getElementById("CantidadMaterialA_ProductoA");
    var CostoUnitarioMaterialA_ProductoA_celda = document.getElementById("CostoUnitarioMaterialA_ProductoA");

    var CostoMaterialB_ProductoA_celda = document.getElementById("CostoMaterialB_ProductoA");
    var CantidadMaterialB_ProductoA_celda = document.getElementById("CantidadMaterialB_ProductoA");
    var CostoUnitarioMaterialB_ProductoA_celda = document.getElementById("CostoUnitarioMaterialB_ProductoA");

    var CostoMaterialC_ProductoA_celda = document.getElementById("CostoMaterialC_ProductoA");
    var CantidadMaterialC_ProductoA_celda = document.getElementById("CantidadMaterialC_ProductoA");
    var CostoUnitarioMaterialC_ProductoA_celda = document.getElementById("CostoUnitarioMaterialC_ProductoA");

    var CostoMOD_ProductoA_celda = document.getElementById("CostoMOD_ProductoA");
    var CantidadHorasMOD_ProductoA_celda = document.getElementById("CantidadHorasMOD_ProductoA");
    var CostoUnitarioMOD_ProductoA_celda = document.getElementById("CostoUnitarioMOD_ProductoA");

    var CostoGIF_ProductoA_celda = document.getElementById("CostoGIF_ProductoA");
    var CantidadGIF_ProductoA_celda = document.getElementById("CantidadGIF_ProductoA");
    var CostoUnitarioGIF_ProductoA_celda = document.getElementById("CostoUnitarioGIF_ProductoA");

    var CostoUnitarioProductoA_celda = document.getElementById("CostoUnitarioProductoA");





    var CostoMaterialA_ProductoB_celda = document.getElementById("CostoMaterialA_ProductoB");
    var CantidadMaterialA_ProductoB_celda = document.getElementById("CantidadMaterialA_ProductoB");
    var CostoUnitarioMaterialA_ProductoB_celda = document.getElementById("CostoUnitarioMaterialA_ProductoB");

    var CostoMaterialB_ProductoB_celda = document.getElementById("CostoMaterialB_ProductoB");
    var CantidadMaterialB_ProductoB_celda = document.getElementById("CantidadMaterialB_ProductoB");
    var CostoUnitarioMaterialB_ProductoB_celda = document.getElementById("CostoUnitarioMaterialB_ProductoB");

    var CostoMaterialC_ProductoB_celda = document.getElementById("CostoMaterialC_ProductoB");
    var CantidadMaterialC_ProductoB_celda = document.getElementById("CantidadMaterialC_ProductoB");
    var CostoUnitarioMaterialC_ProductoB_celda = document.getElementById("CostoUnitarioMaterialC_ProductoB");

    var CostoMOD_ProductoB_celda = document.getElementById("CostoMOD_ProductoB");
    var CantidadHorasMOD_ProductoB_celda = document.getElementById("CantidadHorasMOD_ProductoB");
    var CostoUnitarioMOD_ProductoB_celda = document.getElementById("CostoUnitarioMOD_ProductoB");

    var CostoGIF_ProductoB_celda = document.getElementById("CostoGIF_ProductoB");
    var CantidadGIF_ProductoB_celda = document.getElementById("CantidadGIF_ProductoB");
    var CostoUnitarioGIF_ProductoB_celda = document.getElementById("CostoUnitarioGIF_ProductoB");

    var CostoUnitarioProductoB_celda = document.getElementById("CostoUnitarioProductoB");




    var CostoMaterialA_ProductoC_celda = document.getElementById("CostoMaterialA_ProductoC");
    var CantidadMaterialA_ProductoC_celda = document.getElementById("CantidadMaterialA_ProductoC");
    var CostoUnitarioMaterialA_ProductoC_celda = document.getElementById("CostoUnitarioMaterialA_ProductoC");

    var CostoMaterialB_ProductoC_celda = document.getElementById("CostoMaterialB_ProductoC");
    var CantidadMaterialB_ProductoC_celda = document.getElementById("CantidadMaterialB_ProductoC");
    var CostoUnitarioMaterialB_ProductoC_celda = document.getElementById("CostoUnitarioMaterialB_ProductoC");

    var CostoMaterialC_ProductoC_celda = document.getElementById("CostoMaterialC_ProductoC");
    var CantidadMaterialC_ProductoC_celda = document.getElementById("CantidadMaterialC_ProductoC");
    var CostoUnitarioMaterialC_ProductoC_celda = document.getElementById("CostoUnitarioMaterialC_ProductoC");

    var CostoMOD_ProductoC_celda = document.getElementById("CostoMOD_ProductoC");
    var CantidadHorasMOD_ProductoC_celda = document.getElementById("CantidadHorasMOD_ProductoC");
    var CostoUnitarioMOD_ProductoC_celda = document.getElementById("CostoUnitarioMOD_ProductoC");

    var CostoGIF_ProductoC_celda = document.getElementById("CostoGIF_ProductoC");
    var CantidadGIF_ProductoC_celda = document.getElementById("CantidadGIF_ProductoC");
    var CostoUnitarioGIF_ProductoC_celda = document.getElementById("CostoUnitarioGIF_ProductoC");

    var CostoUnitarioProductoC_celda = document.getElementById("CostoUnitarioProductoC");

    //Extraer las celdas de la tabla 11. Valuación de Inventarios Finales

    var InventarioFinal_MaterialA_Unidades_celda = document.getElementById("InventarioFinal_MaterialA_Unidades");
    var InventarioFinal_MaterialA_CostoUnitario_celda = document.getElementById("InventarioFinal_MaterialA_CostoUnitario");
    var InventarioFinal_MaterialA_CostoTotal_celda = document.getElementById("InventarioFinal_MaterialA_CostoTotal");

    var InventarioFinal_MaterialB_Unidades_celda = document.getElementById("InventarioFinal_MaterialB_Unidades");
    var InventarioFinal_MaterialB_CostoUnitario_celda = document.getElementById("InventarioFinal_MaterialB_CostoUnitario");
    var InventarioFinal_MaterialB_CostoTotal_celda = document.getElementById("InventarioFinal_MaterialB_CostoTotal");

    var InventarioFinal_MaterialC_Unidades_celda = document.getElementById("InventarioFinal_MaterialC_Unidades");
    var InventarioFinal_MaterialC_CostoUnitario_celda = document.getElementById("InventarioFinal_MaterialC_CostoUnitario");
    var InventarioFinal_MaterialC_CostoTotal_celda = document.getElementById("InventarioFinal_MaterialC_CostoTotal");

    var InventarioFinalMateriales_celda = document.getElementById("InventarioFinalMateriales");



    var InventarioFinal_ProductoA_Unidades_celda = document.getElementById("InventarioFinal_ProductoA_Unidades");
    var InventarioFinal_ProductoA_CostoUnitario_celda = document.getElementById("InventarioFinal_ProductoA_CostoUnitario");
    var InventarioFinal_ProductoA_CostoTotal_celda = document.getElementById("InventarioFinal_ProductoA_CostoTotal");

    var InventarioFinal_ProductoB_Unidades_celda = document.getElementById("InventarioFinal_ProductoB_Unidades");
    var InventarioFinal_ProductoB_CostoUnitario_celda = document.getElementById("InventarioFinal_ProductoB_CostoUnitario");
    var InventarioFinal_ProductoB_CostoTotal_celda = document.getElementById("InventarioFinal_ProductoB_CostoTotal");

    var InventarioFinal_ProductoC_Unidades_celda = document.getElementById("InventarioFinal_ProductoC_Unidades");
    var InventarioFinal_ProductoC_CostoUnitario_celda = document.getElementById("InventarioFinal_ProductoC_CostoUnitario");
    var InventarioFinal_ProductoC_CostoTotal_celda = document.getElementById("InventarioFinal_ProductoC_CostoTotal");

    var InventarioFinalProductosTerminados_celda = document.getElementById("InventarioFinalProductosTerminados");


    //Extraer las celdas de la tabla Estado de Costo de Producción y Ventas

    var SaldoInicialMateriales_celda = document.getElementById("SaldoInicialMateriales");

    var ComprasMateriales_celda = document.getElementById("ComprasMateriales");

    var MaterialDisponible_celda = document.getElementById("MaterialDisponible");

    var InventarioFinalMateriales_EstadoCosto_celda = document.getElementById("InventarioFinalMateriales_EstadoCosto");

    var MaterialesUtilizados_celda = document.getElementById("MaterialesUtilizados");

    var MOD_EstadoCosto_celda = document.getElementById("MOD_EstadoCosto");

    var GIF_EstadoCosto_celda = document.getElementById("GIF_EstadoCosto");

    var CostoProduccion_EstadoCosto_celda = document.getElementById("CostoProduccion_EstadoCosto");

    var InventarioInicialProductosTerminados_EstadoCosto_celda = document.getElementById("InventarioInicialProductosTerminados_EstadoCosto");

    var TotalProduccionDisponible_EstadoCosto_celda = document.getElementById("TotalProduccionDisponible_EstadoCosto");

    var InventarioFinalProductosTerminados_EstadoCosto_celda = document.getElementById("InventarioFinalProductosTerminados_EstadoCosto");

    var CostoVentas_EstadoCosto_celda = document.getElementById("CostoVentas_EstadoCosto");

    //Extraer las celdas de la tabla Estado de Resultados

    var Ventas_EstadoResultados_celda = document.getElementById("Ventas_EstadoResultados");

    var CostoVentas_EstadoResultado_celda = document.getElementById("CostoVentas_EstadoResultado");

    var UtilidadBruta_EstadoResultado_celda = document.getElementById("UtilidadBruta_EstadoResultado");

    var GastoOperacion_EstadoResultado_celda = document.getElementById("GastoOperacion_EstadoResultado");

    var UtilidadOperaciones_EstadoResultado_celda = document.getElementById("UtilidadOperaciones_EstadoResultado");

    var ISR_EstadoResultado_celda = document.getElementById("ISR_EstadoResultado");

    var PTU_EstadoResultado_celda = document.getElementById("PTU_EstadoResultado");

    var UtilidadNeta_EstadoResultado_celda = document.getElementById("UtilidadNeta_EstadoResultado");

    //Extraer las celdas de la tabla Estado de Flujo de Efectivo

    var SaldoInicialEfectivo_EstadoFlujoEfectivo_celda = document.getElementById("SaldoInicialEfectivo_EstadoFlujoEfectivo");

    var CobranzaPasado_FlujoEfectivo_celda = document.getElementById("CobranzaPasado_FlujoEfectivo");

    var CobranzaActual_FlujoEfectivo_celda = document.getElementById("CobranzaActual_FlujoEfectivo");

    var TotalEntradas_FlujoEfectivo_celda = document.getElementById("TotalEntradas_FlujoEfectivo");

    var EfectivoDisponible_FlujoEfectivo_celda = document.getElementById("EfectivoDisponible_FlujoEfectivo");



    var ProvedoresPasado_FlujoEfectivo_celda = document.getElementById("ProvedoresPasado_FlujoEfectivo");

    var ProveedoresActual_FlujoEfectivo_celda = document.getElementById("ProveedoresActual_FlujoEfectivo");

    var PagoMOD_FlujoEfectivo_celda = document.getElementById("PagoMOD_FlujoEfectivo");

    var PagoGIF_FlujoEfectivo_celda = document.getElementById("PagoGIF_FlujoEfectivo");

    var PagoGO_FlujoEfectivo_celda = document.getElementById("PagoGO_FlujoEfectivo");

    var CompraActivo_FlujoEfectivo_celda = document.getElementById("CompraActivo_FlujoEfectivo");

    var PasadoISR_FlujoEfectivo_celda = document.getElementById("PasadoISR_FlujoEfectivo");

    var ActualISR_FlujoEfectivo_celda = document.getElementById("ActualISR_FlujoEfectivo");

    var TotalSalidas_FlujoEfectivo_celda = document.getElementById("TotalSalidas_FlujoEfectivo");

    var FlujoEfectivoActual_celda = document.getElementById("FlujoEfectivoActual");

    //Extraer las celdas de la tabla Balance General

    var Efectivo_BalanceGeneral_celda = document.getElementById("Efectivo_BalanceGeneral");
    var Clientes_BalanceGeneral_celda = document.getElementById("Clientes_BalanceGeneral");
    var InventarioMateriales_BalanceGeneral_celda = document.getElementById("InventarioMateriales_BalanceGeneral");
    var InventarioProductoTerminado_BalanceGeneral_celda = document.getElementById("InventarioProductoTerminado_BalanceGeneral");

    var TotalActivosCirculantes_BalanceGeneral_celda = document.getElementById("TotalActivosCirculantes_BalanceGeneral");


    var Terreo_BalanceGeneral_celda = document.getElementById("Terreo_BalanceGeneral");
    var PlantaEquipo_BalanceGeneral_celda = document.getElementById("PlantaEquipo_BalanceGeneral");
    var DepreciacionAcumulada_BalanceGeneral_celda = document.getElementById("DepreciacionAcumulada_BalanceGeneral");

    var TotalActivosNoCirculantes_BalanceGeneral_celda = document.getElementById("TotalActivosNoCirculantes_BalanceGeneral");


    var ActivoTotal_BalanceGeneral_celda = document.getElementById("ActivoTotal_BalanceGeneral");



    var Proveedores_BalanceGeneral_celda = document.getElementById("Proveedores_BalanceGeneral");
    var DocumentosPorPagar_BalanceGeneral_celda = document.getElementById("DocumentosPorPagar_BalanceGeneral");
    var PTUPorPagar_BalanceGeneral_celda = document.getElementById("PTUPorPagar_BalanceGeneral");

    var TotalPasivoCortoPlazo_BalanceGeneral_celda = document.getElementById("TotalPasivoCortoPlazo_BalanceGeneral");


    var ObligacionesPorPagar_BalanceGeneral_celda = document.getElementById("ObligacionesPorPagar_BalanceGeneral");

    var TotalPasivoLargoPlazo_BalanceGeneral_celda = document.getElementById("TotalPasivoLargoPlazo_BalanceGeneral");

    var TotalPasivo_BalanceGeneral_celda = document.getElementById("TotalPasivo_BalanceGeneral");


    var CapitalAportado_BalanceGeneral_celda = document.getElementById("CapitalAportado_BalanceGeneral");
    var CapitalGanado_BalanceGeneral_celda = document.getElementById("CapitalGanado_BalanceGeneral");
    var UtilidadEjercicio_BalanceGeneral_celda = document.getElementById("UtilidadEjercicio_BalanceGeneral");

    var TotalCapitalContable_celda = document.getElementById("TotalCapitalContable");

    var SumaPasivoCapital_BalanceGeneral_celda = document.getElementById("SumaPasivoCapital_BalanceGeneral");
    
    



    //Realizar los campos calculados de la tabla: 1. Presupuesto de ventas 

    var Importe_venta_ProductoA_PrimerSemestre = Precio_venta_PrimerSemestre_ProductoA * Ventas_planeadas_ProductoA_PrimerSemestre;
    var Importe_venta_ProductoB_PrimerSemestre = Precio_venta_PrimerSemestre_ProductoB * Ventas_planeadas_ProductoB_PrimerSemestre;
    var Importe_venta_ProductoC_PrimerSemestre = Precio_venta_PrimerSemestre_ProductoC * Ventas_planeadas_ProductoC_PrimerSemestre;

    var Importe_venta_ProductoA_SegundoSemestre = Precio_venta_SegundoSemestre_ProductoA * Ventas_planeadas_ProductoA_SegundoSemestre;
    var Importe_venta_ProductoB_SegundoSemestre = Precio_venta_SegundoSemestre_ProductoB * Ventas_planeadas_ProductoB_SegundoSemestre;
    var Importe_venta_ProductoC_SegundoSemestre = Precio_venta_SegundoSemestre_ProductoC * Ventas_planeadas_ProductoC_SegundoSemestre;

    var VentasAnuales_ProductoA = Importe_venta_ProductoA_PrimerSemestre + Importe_venta_ProductoA_SegundoSemestre;
    var VentasAnuales_ProductoB = Importe_venta_ProductoB_PrimerSemestre + Importe_venta_ProductoB_SegundoSemestre;
    var VentasAnuales_ProductoC = Importe_venta_ProductoC_PrimerSemestre + Importe_venta_ProductoC_SegundoSemestre;

    var Total_ventas_PrimerSemestre = Importe_venta_ProductoA_PrimerSemestre + Importe_venta_ProductoB_PrimerSemestre + Importe_venta_ProductoC_PrimerSemestre
    var Total_ventas_SegundoSemestre = Importe_venta_ProductoA_SegundoSemestre + Importe_venta_ProductoB_SegundoSemestre + Importe_venta_ProductoC_SegundoSemestre;
    var TotalVentasAnuales = Total_ventas_PrimerSemestre + Total_ventas_SegundoSemestre


    //Realizar los campos calculados de la tabla: 2. Determinación del saldo de Clientes y Flujo de Entradas

    var Total_Clientes_Actual = Activos_Clientes + TotalVentasAnuales;
    var PorCobrar_Pasado = (Activos_Clientes * Porcentaje_Clientes_Pasado)/100;
    var PorCobrar_Actual = (TotalVentasAnuales * Porcentaje_Ventas_Actual)/100;
    var Total_Entradas_Actual = PorCobrar_Pasado + PorCobrar_Actual;
    var Saldo_Clientes_Actual = Total_Clientes_Actual - Total_Entradas_Actual;

    //Realizar los campos calculados de la tabla: 3. Presupuesto de Producción
    var Unidades_a_vender_productoA_Anual_PresupuestoProduccion = Ventas_planeadas_ProductoA_PrimerSemestre + Ventas_planeadas_ProductoA_SegundoSemestre;
    var Total_unidades_productoA_PrimerSemestre = Ventas_planeadas_ProductoA_PrimerSemestre + InventarioInicialPrimer_ProductoA;
    var Total_unidades_productoA_SegundoSemestre = Ventas_planeadas_ProductoA_SegundoSemestre + InventarioInicialSegundo_ProductoA;
    var Total_Unidades_productoA_Anuales = Unidades_a_vender_productoA_Anual_PresupuestoProduccion + InventarioInicialSegundo_ProductoA;
    var Unidades_a_producir_productoA_PrimerSemestre = Total_unidades_productoA_PrimerSemestre - InventarioInicialPrimer_ProductoA;
    var Unidades_a_producir_productoA_SegundoSemestre = Total_unidades_productoA_SegundoSemestre - InventarioInicialPrimer_ProductoA;
    var Total_Unidades_Producir_productoA_Anual = Total_Unidades_productoA_Anuales - InventarioInicialPrimer_ProductoA;

    var Unidades_a_vender_productoB_Anual_PresupuestoProduccion = Ventas_planeadas_ProductoB_PrimerSemestre + Ventas_planeadas_ProductoB_SegundoSemestre;
    var Total_unidades_productoB_PrimerSemestre = Ventas_planeadas_ProductoB_PrimerSemestre + InventarioInicialPrimer_ProductoB;
    var Total_unidades_productoB_SegundoSemestre = Ventas_planeadas_ProductoB_SegundoSemestre + InventarioInicialSegundo_ProductoB;
    var Total_Unidades_productoB_Anuales = Unidades_a_vender_productoB_Anual_PresupuestoProduccion + InventarioInicialSegundo_ProductoB;

    var Unidades_a_producir_productoB_PrimerSemestre = Total_unidades_productoB_PrimerSemestre - InventarioInicialPrimer_ProductoB;
    var Unidades_a_producir_productoB_SegundoSemestre = Total_unidades_productoB_SegundoSemestre - InventarioInicialPrimer_ProductoB;
    var Total_Unidades_Producir_productoB_Anual = Total_Unidades_productoB_Anuales - InventarioInicialPrimer_ProductoB;

    var Unidades_a_vender_productoC_Anual_PresupuestoProduccion = Ventas_planeadas_ProductoC_PrimerSemestre + Ventas_planeadas_ProductoC_SegundoSemestre;
    var Total_unidades_productoC_PrimerSemestre = Ventas_planeadas_ProductoC_PrimerSemestre + InventarioInicialPrimer_ProductoC;
    var Total_unidades_productoC_SegundoSemestre = Ventas_planeadas_ProductoC_SegundoSemestre + InventarioInicialSegundo_ProductoC;
    var Total_Unidades_productoC_Anuales = Unidades_a_vender_productoC_Anual_PresupuestoProduccion + InventarioInicialSegundo_ProductoC;

    var Unidades_a_producir_productoC_PrimerSemestre = Total_unidades_productoC_PrimerSemestre - InventarioInicialPrimer_ProductoC;
    var Unidades_a_producir_productoC_SegundoSemestre = Total_unidades_productoC_SegundoSemestre - InventarioInicialPrimer_ProductoC;
    var Total_Unidades_Producir_productoC_Anual = Total_Unidades_productoC_Anuales - InventarioInicialPrimer_ProductoC;

    //Realizar los campos calculados de la tabla: 4. Presupuesto de Requerimiento de Materiales

    var Total_materialA_productoA_PrimerSemestre = Unidades_a_producir_productoA_PrimerSemestre * Materia_primaA_productoA;
    var Total_materialA_productoA_SegundoSemestre = Unidades_a_producir_productoA_SegundoSemestre * Materia_primaA_productoA;
    var TotalA_material_productoA_Anual = Total_Unidades_Producir_productoA_Anual * Materia_primaA_productoA;

    var Total_materialB_productoA_PrimerSemestre = Unidades_a_producir_productoA_PrimerSemestre * Materia_primaB_productoA;
    var Total_materialB_productoA_SegundoSemestre = Unidades_a_producir_productoA_SegundoSemestre * Materia_primaB_productoA;
    var TotalA_materialB_productoA_Anual = Total_Unidades_Producir_productoA_Anual * Materia_primaB_productoA;

    var Total_materialC_productoA_PrimerSemestre = Unidades_a_producir_productoA_PrimerSemestre * Materia_primaC_productoA;
    var Total_materialC_productoA_SegundoSemestre = Unidades_a_producir_productoA_SegundoSemestre * Materia_primaC_productoA;
    var TotalA_materialC_productoA_Anual = Total_Unidades_Producir_productoA_Anual * Materia_primaC_productoA;


    var Total_materialA_productoB_PrimerSemestre = Unidades_a_producir_productoB_PrimerSemestre * Materia_primaA_productoB;
    var Total_materialA_productoB_SegundoSemestre = Unidades_a_producir_productoB_SegundoSemestre * Materia_primaA_productoB;
    var TotalA_material_productoB_Anual = Total_Unidades_Producir_productoB_Anual * Materia_primaA_productoB;

    var Total_materialB_productoB_PrimerSemestre = Unidades_a_producir_productoB_PrimerSemestre * Materia_primaB_productoB;
    var Total_materialB_productoB_SegundoSemestre = Unidades_a_producir_productoB_SegundoSemestre * Materia_primaB_productoB;
    var TotalA_materialB_productoB_Anual = Total_Unidades_Producir_productoB_Anual * Materia_primaB_productoB;
    
    var Total_materialC_productoB_PrimerSemestre = Unidades_a_producir_productoB_PrimerSemestre * Materia_primaC_productoB;
    var Total_materialC_productoB_SegundoSemestre = Unidades_a_producir_productoB_SegundoSemestre * Materia_primaC_productoB;
    var TotalA_materialC_productoB_Anual = Total_Unidades_Producir_productoB_Anual * Materia_primaC_productoB;


    var Total_materialA_productoC_PrimerSemestre = Unidades_a_producir_productoC_PrimerSemestre * Materia_primaA_productoC;
    var Total_materialA_productoC_SegundoSemestre = Unidades_a_producir_productoC_SegundoSemestre * Materia_primaA_productoC;
    var TotalA_materialA_productoC_Anual = Total_Unidades_Producir_productoC_Anual * Materia_primaA_productoC;

    var Total_materialB_productoC_PrimerSemestre = Unidades_a_producir_productoC_PrimerSemestre * Materia_primaB_productoC;
    var Total_materialB_productoC_SegundoSemestre = Unidades_a_producir_productoC_SegundoSemestre * Materia_primaB_productoC;
    var TotalA_materialB_productoC_Anual = Total_Unidades_Producir_productoC_Anual * Materia_primaB_productoC;

    var Total_materialC_productoC_PrimerSemestre = Unidades_a_producir_productoC_PrimerSemestre * Materia_primaC_productoC;
    var Total_materialC_productoC_SegundoSemestre = Unidades_a_producir_productoC_SegundoSemestre * Materia_primaC_productoC;
    var TotalA_materialC_productoC_Anual = Total_Unidades_Producir_productoC_Anual * Materia_primaC_productoC;

    var Total_materialA_PrimerSemestre = Total_materialA_productoA_PrimerSemestre + Total_materialA_productoB_PrimerSemestre + Total_materialA_productoC_PrimerSemestre;
    var Total_materialA_SegundoSemestre = Total_materialA_productoA_SegundoSemestre + Total_materialA_productoB_SegundoSemestre + Total_materialA_productoC_SegundoSemestre;
    var Total_materialA_Anual = Total_materialA_PrimerSemestre + Total_materialA_SegundoSemestre;

    var Total_materialB_PrimerSemestre = Total_materialB_productoA_PrimerSemestre + Total_materialB_productoB_PrimerSemestre + Total_materialB_productoC_PrimerSemestre;
    var Total_materialB_SegundoSemestre = Total_materialB_productoA_SegundoSemestre + Total_materialB_productoB_SegundoSemestre + Total_materialB_productoC_SegundoSemestre;
    var Total_materialB_Anual = Total_materialB_PrimerSemestre + Total_materialB_SegundoSemestre;

    var Total_materialC_PrimerSemestre = Total_materialC_productoA_PrimerSemestre + Total_materialC_productoB_PrimerSemestre + Total_materialC_productoC_PrimerSemestre;
    var Total_materialC_SegundoSemestre = Total_materialC_productoA_SegundoSemestre + Total_materialC_productoB_SegundoSemestre + Total_materialC_productoC_SegundoSemestre;
    var Total_materialC_Anual = Total_materialC_PrimerSemestre + Total_materialC_SegundoSemestre;


    //Realizar los campos calculados de la tabla: 5. Presupuesto de Compra de Materiales

    var Total_de_MaterialA_PrimerSemestre = Total_materialA_PrimerSemestre + InventarioInicial_MaterialA;
    var Total_de_MaterialA_SegundoSemestre = Total_materialA_SegundoSemestre + InventarioFinal_MaterialA;
    var Total_de_MaterialA_Anual = Total_materialA_Anual + InventarioFinal_MaterialA;

    var Material_comprar_MaterialA_PrimerSemestre = Total_de_MaterialA_PrimerSemestre - InventarioInicial_MaterialA;
    var Material_comprar_MaterialA_SegundoSemestre = Total_de_MaterialA_SegundoSemestre - InventarioInicial_MaterialA;
    var Material_comprar_MaterialA_Anual = Total_de_MaterialA_Anual - InventarioInicial_MaterialA;

    var Precio_compra_MaterialA_PrimerSemestre = CostoPrimer_MaterialA;
    var Precio_compra_MaterialA_SegundoSemestre = CostoSegundo_MaterialA;

    var Total_precio_MaterialA_PrimerSemestre = Material_comprar_MaterialA_PrimerSemestre * Precio_compra_MaterialA_PrimerSemestre;
    var Total_precio_MaterialA_SegundoSemestre = Material_comprar_MaterialA_SegundoSemestre * Precio_compra_MaterialA_SegundoSemestre;
    var Total_precio_MaterialA_Anual = Total_precio_MaterialA_PrimerSemestre + Total_precio_MaterialA_SegundoSemestre;


    var Total_de_MaterialB_PrimerSemestre = Total_materialB_PrimerSemestre + InventarioInicial_MaterialB;
    var Total_de_MaterialB_SegundoSemestre = Total_materialB_SegundoSemestre + InventarioFinal_MaterialB;
    var Total_de_MaterialB_Anual = Total_materialB_Anual + InventarioFinal_MaterialB;

    var Material_comprar_MaterialB_PrimerSemestre = Total_de_MaterialB_PrimerSemestre - InventarioInicial_MaterialB;
    var Material_comprar_MaterialB_SegundoSemestre = Total_de_MaterialB_SegundoSemestre - InventarioInicial_MaterialB;
    var Material_comprar_MaterialB_Anual = Total_de_MaterialB_Anual - InventarioInicial_MaterialB;

    var Precio_compra_MaterialB_PrimerSemestre = CostoPrimer_MaterialB;
    var Precio_compra_MaterialB_SegundoSemestre = CostoSegundo_MaterialB;

    var Total_precio_MaterialB_PrimerSemestre = Material_comprar_MaterialB_PrimerSemestre * Precio_compra_MaterialB_PrimerSemestre;
    var Total_precio_MaterialB_SegundoSemestre = Material_comprar_MaterialB_SegundoSemestre * Precio_compra_MaterialB_SegundoSemestre;
    var Total_precio_MaterialB_Anual = Total_precio_MaterialB_PrimerSemestre + Total_precio_MaterialB_SegundoSemestre;


    var Total_de_MaterialC_PrimerSemestre = Total_materialC_PrimerSemestre + InventarioInicial_MaterialC;
    var Total_de_MaterialC_SegundoSemestre = Total_materialC_SegundoSemestre + InventarioFinal_MaterialC;
    var Total_de_MaterialC_Anual = Total_materialC_Anual + InventarioFinal_MaterialC;

    var Material_comprar_MaterialC_PrimerSemestre = Total_de_MaterialC_PrimerSemestre - InventarioInicial_MaterialC;
    var Material_comprar_MaterialC_SegundoSemestre = Total_de_MaterialC_SegundoSemestre - InventarioInicial_MaterialC;
    var Material_comprar_MaterialC_Anual = Total_de_MaterialC_Anual - InventarioInicial_MaterialC;

    var Precio_compra_MaterialC_PrimerSemestre = CostoPrimer_MaterialC;
    var Precio_compra_MaterialC_SegundoSemestre = CostoSegundo_MaterialC;

    var Total_precio_MaterialC_PrimerSemestre = Material_comprar_MaterialC_PrimerSemestre * Precio_compra_MaterialC_PrimerSemestre;
    var Total_precio_MaterialC_SegundoSemestre = Material_comprar_MaterialC_SegundoSemestre * Precio_compra_MaterialC_SegundoSemestre;
    var Total_precio_MaterialC_Anual = Total_precio_MaterialC_PrimerSemestre + Total_precio_MaterialC_SegundoSemestre;



    var Total_precio_Material_PrimerSemeste = Total_precio_MaterialA_PrimerSemestre + Total_precio_MaterialB_PrimerSemestre + Total_precio_MaterialC_PrimerSemestre;
    var Total_precio_Material_SegundoSemeste = Total_precio_MaterialA_SegundoSemestre + Total_precio_MaterialB_SegundoSemestre + Total_precio_MaterialC_SegundoSemestre;
    var Total_precio_Material_Anual = Total_precio_Material_PrimerSemeste + Total_precio_Material_SegundoSemeste;

    //Realizar los campos calculados de la tabla: 6. Determinación del saldo de Proveedores y Flujo de Salidas

    var Total_proveedores_Actual = Pasivos_Proveedores + Total_precio_Material_Anual;

    var PorProveedor_Pasado = (Pasivos_Proveedores * Porcentaje_Proveedores_Pasado)/100;
    var PorCompras_Actual = (Total_precio_Material_Anual * Porcentaje_Compras_Actual)/100;
    var Total_Salidas_Actual = PorProveedor_Pasado + PorCompras_Actual;

    var Saldo_Proveedores_Actual = Total_proveedores_Actual - Total_Salidas_Actual;

    //Realizar los campos calculados de la tabla: 7. Presupuesto de Mano de Obra Directa

    var TotalHorasProductoA_PrimerSemestre = Unidades_a_producir_productoA_PrimerSemestre * ManoDeObraHora_ProductoA;
    var TotalHorasProductoA_SegundoSemestre = Unidades_a_producir_productoA_SegundoSemestre * ManoDeObraHora_ProductoA;
    var TotalHorasProductoA_Anual = Total_Unidades_Producir_productoA_Anual * ManoDeObraHora_ProductoA;

    var ImporteMODProductoA_PrimerSemestre = TotalHorasProductoA_PrimerSemestre * CuotaManoDeObra_PrimerSemestre;
    var ImporteMODProductoA_SegundoSemestre = TotalHorasProductoA_SegundoSemestre * CuotaManoDeObra_SegundoSemestre;
    var ImporteMODProductoA_Anual = ImporteMODProductoA_PrimerSemestre + ImporteMODProductoA_SegundoSemestre;



    var TotalHorasProductoB_PrimerSemestre = Unidades_a_producir_productoB_PrimerSemestre * ManoDeObraHora_ProductoB;
    var TotalHorasProductoB_SegundoSemestre = Unidades_a_producir_productoB_SegundoSemestre * ManoDeObraHora_ProductoB;
    var TotalHorasProductoB_Anual = Total_Unidades_Producir_productoB_Anual * ManoDeObraHora_ProductoB;

    var ImporteMODProductoB_PrimerSemestre = TotalHorasProductoB_PrimerSemestre * CuotaManoDeObra_PrimerSemestre;
    var ImporteMODProductoB_SegundoSemestre = TotalHorasProductoB_SegundoSemestre * CuotaManoDeObra_SegundoSemestre;
    var ImporteMODProductoB_Anual = ImporteMODProductoB_PrimerSemestre + ImporteMODProductoB_SegundoSemestre;



    var TotalHorasProductoC_PrimerSemestre = Unidades_a_producir_productoC_PrimerSemestre * ManoDeObraHora_ProductoC;
    var TotalHorasProductoC_SegundoSemestre = Unidades_a_producir_productoC_SegundoSemestre * ManoDeObraHora_ProductoC;
    var TotalHorasProductoC_Anual = Total_Unidades_Producir_productoC_Anual * ManoDeObraHora_ProductoC;

    var ImporteMODProductoC_PrimerSemestre = TotalHorasProductoC_PrimerSemestre * CuotaManoDeObra_PrimerSemestre;
    var ImporteMODProductoC_SegundoSemestre = TotalHorasProductoC_SegundoSemestre * CuotaManoDeObra_SegundoSemestre;
    var ImporteMODProductoC_Anual = ImporteMODProductoC_PrimerSemestre + ImporteMODProductoC_SegundoSemestre;



    var TotalHoras_PrimerSemestre = TotalHorasProductoA_PrimerSemestre + TotalHorasProductoB_PrimerSemestre + TotalHorasProductoC_PrimerSemestre;
    var TotalHoras_SegundoSemestre = TotalHorasProductoA_SegundoSemestre + TotalHorasProductoB_SegundoSemestre + TotalHorasProductoC_SegundoSemestre;
    var TotalHoras_Anual = TotalHoras_PrimerSemestre + TotalHoras_SegundoSemestre;



    var TotalMOD_PrimerSemestre = ImporteMODProductoA_PrimerSemestre + ImporteMODProductoB_PrimerSemestre + ImporteMODProductoC_PrimerSemestre;
    var TotalMOD_SegundoSemestre = ImporteMODProductoA_SegundoSemestre + ImporteMODProductoB_SegundoSemestre + ImporteMODProductoC_SegundoSemestre;
    var TotalMOD_Anual = TotalMOD_PrimerSemestre + TotalMOD_SegundoSemestre;



    //Realizar los campos calculados de la tabla: 8. Presupuesto de Gastos Indirectos de Fabricación

    var DepreciacionFI_PrimerSemestre = DepreciacionFabricacionIndirectos / 2;
    var DepreciacionFI_SegundoSemestre = DepreciacionFabricacionIndirectos /2;
    var DepreciacionFI_Anual = DepreciacionFabricacionIndirectos;

    var SegurosFI_PrimerSemestre = SegurosFabricacionIndirectos / 2;
    var SegurosFI_SegundoSemestre = SegurosFabricacionIndirectos /2;
    var SegurosFI_Anual = SegurosFabricacionIndirectos;

    var MantenimientoFI_PrimerSemestre = MantenimientoFabricacionIndirectos_PrimerSemestre;
    var MantenimientoFI_SegundoSemestre = MantenimientoFabricacionIndirectos_SegundoSemestre
    var MantenimientoFI_Anual = MantenimientoFI_PrimerSemestre + MantenimientoFI_SegundoSemestre;

    var EnergeticosFI_PrimerSemestre = EnergeticosFabricacionIndirectos_PrimerSemestre;
    var EnergeticosFI_SegundoSemestre = EnergeticosFabricacionIndirectos_SegundoSemestre
    var EnergeticosFI_Anual = EnergeticosFI_PrimerSemestre + EnergeticosFI_SegundoSemestre;

    var VariosFI_PrimerSemestre = VariosFabricacionIndirectos / 2;
    var VariosFI_SegundoSemestre = VariosFabricacionIndirectos /2;
    var VariosFI_Anual = VariosFabricacionIndirectos;

    var TotalGIF_PrimerSemestre = DepreciacionFI_PrimerSemestre + SegurosFI_PrimerSemestre + MantenimientoFI_PrimerSemestre + EnergeticosFI_PrimerSemestre + VariosFI_PrimerSemestre;
    var TotalGIF_SegundoSemestre = DepreciacionFI_SegundoSemestre + SegurosFI_SegundoSemestre + MantenimientoFI_SegundoSemestre + EnergeticosFI_SegundoSemestre + VariosFI_SegundoSemestre;
    var TotalGIF_Anual = TotalGIF_PrimerSemestre + TotalGIF_SegundoSemestre;

    var TotalGIF_Coeficiente = TotalGIF_Anual;

    var TotalMOD_Coeficiente = TotalHoras_Anual;

    var CostoHoraGIF_Coeficiente = TotalGIF_Coeficiente / TotalMOD_Coeficiente;


    //Realizar los campos calculados de la tabla: 9. Presupuesto de Gastos de Operación

    var DepreciacionGO_PrimerSemestre = DepreciacionAdministracionVentas / 2;
    var DepreciacionGO_SegundoSemestre = DepreciacionAdministracionVentas /2;
    var DepreciacionGO_Anual = DepreciacionAdministracionVentas;

    var SueldosGO_PrimerSemestre = SueldosAdministracionVentas / 2;
    var SueldosGO_SegundoSemestre = SueldosAdministracionVentas /2;
    var SueldosGO_Anual = SueldosAdministracionVentas;

    var ComisionesGO_PrimerSemestre = (Total_ventas_PrimerSemestre * ComisionesAdministracionVentas)/100;
    var ComisionesGO_SegundoSemestre = (Total_ventas_SegundoSemestre * ComisionesAdministracionVentas)/100;
    var ComisionesGO_Anual = ComisionesGO_PrimerSemestre + ComisionesGO_SegundoSemestre;

    var VariosGO_PrimerSemestre = VariosAdministracionVentas_PrimerSemestre;
    var VariosGO_SegundoSemestre = VariosAdministracionVentas_SegundoSemestre;
    var VariosGO_Anual = VariosGO_PrimerSemestre + VariosGO_SegundoSemestre;

    var InteresesGO_PrimerSemestre = InteresAdministracionVentas / 2;
    var InteresesGO_SegundoSemestre = InteresAdministracionVentas / 2;
    var InteresesGO_Anual = InteresAdministracionVentas;

    var TotalGO_PrimerSemestre = DepreciacionGO_PrimerSemestre + SueldosGO_PrimerSemestre + ComisionesGO_PrimerSemestre + VariosGO_PrimerSemestre + InteresesGO_PrimerSemestre;
    var TotalGO_SegundoSemestre = DepreciacionGO_SegundoSemestre + SueldosGO_SegundoSemestre + ComisionesGO_SegundoSemestre + VariosGO_SegundoSemestre + InteresesGO_SegundoSemestre;
    var TotalGO_Anual = TotalGO_PrimerSemestre + TotalGO_SegundoSemestre;

    //Realizar los campos calculados de la tabla: 10. Determinación del Costo Unitario de Productos Terminados

    var CostoMaterialA_ProductoA = Precio_compra_MaterialA_SegundoSemestre;
    var CantidadMaterialA_ProductoA = Materia_primaA_productoA;
    var CostoUnitarioMaterialA_ProductoA = CostoMaterialA_ProductoA * CantidadMaterialA_ProductoA;

    var CostoMaterialB_ProductoA = Precio_compra_MaterialB_SegundoSemestre;
    var CantidadMaterialB_ProductoA = Materia_primaB_productoA;
    var CostoUnitarioMaterialB_ProductoA = CostoMaterialB_ProductoA * CantidadMaterialB_ProductoA;

    var CostoMaterialC_ProductoA = Precio_compra_MaterialC_SegundoSemestre;
    var CantidadMaterialC_ProductoA = Materia_primaC_productoA;
    var CostoUnitarioMaterialC_ProductoA = CostoMaterialC_ProductoA * CantidadMaterialC_ProductoA;

    var CostoMOD_ProductoA = CuotaManoDeObra_SegundoSemestre;
    var CantidadHorasMOD_ProductoA = ManoDeObraHora_ProductoA;
    var CostoUnitarioMOD_ProductoA = CostoMOD_ProductoA * CantidadHorasMOD_ProductoA;

    var CostoGIF_ProductoA = CostoHoraGIF_Coeficiente;
    var CantidadGIF_ProductoA = ManoDeObraHora_ProductoA;
    var CostoUnitarioGIF_ProductoA = CostoGIF_ProductoA * CantidadGIF_ProductoA;

    var CostoUnitarioProductoA = CostoUnitarioMaterialA_ProductoA + CostoUnitarioMaterialB_ProductoA + CostoUnitarioMaterialC_ProductoA + CostoUnitarioMOD_ProductoA + CostoUnitarioGIF_ProductoA;




    var CostoMaterialA_ProductoB = Precio_compra_MaterialA_SegundoSemestre;
    var CantidadMaterialA_ProductoB = Materia_primaA_productoB;
    var CostoUnitarioMaterialA_ProductoB = CostoMaterialA_ProductoB * CantidadMaterialA_ProductoB;

    var CostoMaterialB_ProductoB = Precio_compra_MaterialB_SegundoSemestre;
    var CantidadMaterialB_ProductoB = Materia_primaB_productoB;
    var CostoUnitarioMaterialB_ProductoB = CostoMaterialB_ProductoB * CantidadMaterialB_ProductoB;

    var CostoMaterialC_ProductoB = Precio_compra_MaterialC_SegundoSemestre;
    var CantidadMaterialC_ProductoB = Materia_primaC_productoB;
    var CostoUnitarioMaterialC_ProductoB = CostoMaterialC_ProductoB * CantidadMaterialC_ProductoB;

    var CostoMOD_ProductoB = CuotaManoDeObra_SegundoSemestre;
    var CantidadHorasMOD_ProductoB = ManoDeObraHora_ProductoB;
    var CostoUnitarioMOD_ProductoB = CostoMOD_ProductoB * CantidadHorasMOD_ProductoB;

    var CostoGIF_ProductoB = CostoHoraGIF_Coeficiente;
    var CantidadGIF_ProductoB = ManoDeObraHora_ProductoB;
    var CostoUnitarioGIF_ProductoB = CostoGIF_ProductoB * CantidadGIF_ProductoB;

    var CostoUnitarioProductoB = CostoUnitarioMaterialA_ProductoB + CostoUnitarioMaterialB_ProductoB + CostoUnitarioMaterialC_ProductoB + CostoUnitarioMOD_ProductoB + CostoUnitarioGIF_ProductoB;


    var CostoMaterialA_ProductoC = Precio_compra_MaterialA_SegundoSemestre;
    var CantidadMaterialA_ProductoC = Materia_primaA_productoC;
    var CostoUnitarioMaterialA_ProductoC = CostoMaterialA_ProductoC * CantidadMaterialA_ProductoC;

    var CostoMaterialB_ProductoC = Precio_compra_MaterialB_SegundoSemestre;
    var CantidadMaterialB_ProductoC = Materia_primaB_productoC;
    var CostoUnitarioMaterialB_ProductoC = CostoMaterialB_ProductoC * CantidadMaterialB_ProductoC;

    var CostoMaterialC_ProductoC = Precio_compra_MaterialC_SegundoSemestre;
    var CantidadMaterialC_ProductoC = Materia_primaC_productoC;
    var CostoUnitarioMaterialC_ProductoC = CostoMaterialC_ProductoC * CantidadMaterialC_ProductoC;

    var CostoMOD_ProductoC = CuotaManoDeObra_SegundoSemestre;
    var CantidadHorasMOD_ProductoC = ManoDeObraHora_ProductoC;
    var CostoUnitarioMOD_ProductoC = CostoMOD_ProductoC * CantidadHorasMOD_ProductoC;

    var CostoGIF_ProductoC = CostoHoraGIF_Coeficiente;
    var CantidadGIF_ProductoC = ManoDeObraHora_ProductoC;
    var CostoUnitarioGIF_ProductoC = CostoGIF_ProductoC * CantidadGIF_ProductoC;

    var CostoUnitarioProductoC = CostoUnitarioMaterialA_ProductoC + CostoUnitarioMaterialB_ProductoC + CostoUnitarioMaterialC_ProductoC + CostoUnitarioMOD_ProductoC + CostoUnitarioGIF_ProductoC;

    //Realizar los campos calculados de la tabla: 11. Valuación de Inventarios Finales

    var InventarioFinal_MaterialA_Unidades = InventarioFinal_MaterialA;
    var InventarioFinal_MaterialA_CostoUnitario = Precio_compra_MaterialA_SegundoSemestre;
    var InventarioFinal_MaterialA_CostoTotal = InventarioFinal_MaterialA_Unidades * InventarioFinal_MaterialA_CostoUnitario;

    var InventarioFinal_MaterialB_Unidades = InventarioFinal_MaterialB;
    var InventarioFinal_MaterialB_CostoUnitario = Precio_compra_MaterialB_SegundoSemestre;
    var InventarioFinal_MaterialB_CostoTotal = InventarioFinal_MaterialB_Unidades * InventarioFinal_MaterialB_CostoUnitario;

    var InventarioFinal_MaterialC_Unidades = InventarioFinal_MaterialC;
    var InventarioFinal_MaterialC_CostoUnitario = Precio_compra_MaterialC_SegundoSemestre;
    var InventarioFinal_MaterialC_CostoTotal = InventarioFinal_MaterialC_Unidades * InventarioFinal_MaterialC_CostoUnitario;

    var InventarioFinalMateriales = InventarioFinal_MaterialA_CostoTotal + InventarioFinal_MaterialB_CostoTotal + InventarioFinal_MaterialC_CostoTotal;    



    var InventarioFinal_ProductoA_Unidades = InventarioInicialSegundo_ProductoA;
    var InventarioFinal_ProductoA_CostoUnitario = CostoUnitarioProductoA;
    var InventarioFinal_ProductoA_CostoTotal = InventarioFinal_ProductoA_Unidades * InventarioFinal_ProductoA_CostoUnitario;

    var InventarioFinal_ProductoB_Unidades = InventarioInicialSegundo_ProductoB;
    var InventarioFinal_ProductoB_CostoUnitario = CostoUnitarioProductoB;
    var InventarioFinal_ProductoB_CostoTotal = InventarioFinal_ProductoB_Unidades * InventarioFinal_ProductoB_CostoUnitario;

    var InventarioFinal_ProductoC_Unidades = InventarioInicialSegundo_ProductoC;
    var InventarioFinal_ProductoC_CostoUnitario = CostoUnitarioProductoC;
    var InventarioFinal_ProductoC_CostoTotal = InventarioFinal_ProductoC_Unidades * InventarioFinal_ProductoC_CostoUnitario;

    var InventarioFinalProductosTerminados = InventarioFinal_ProductoA_CostoTotal + InventarioFinal_ProductoB_CostoTotal + InventarioFinal_ProductoC_CostoTotal;


    //Realizar los campos calculados de la tabla: Estado de Costo de Producción y Ventas

    var SaldoInicialMateriales = InventarioMaterialesBalanceGeneral;

    var ComprasMateriales = Total_precio_Material_Anual;

    var MaterialDisponible = SaldoInicialMateriales + ComprasMateriales;

    var InventarioFinalMateriales_EstadoCosto = InventarioFinalMateriales;

    var MaterialesUtilizados = MaterialDisponible - InventarioFinalMateriales_EstadoCosto;

    var MOD_EstadoCosto = TotalMOD_Anual;

    var GIF_EstadoCosto = TotalGIF_Anual;

    var CostoProduccion_EstadoCosto = MaterialesUtilizados + MOD_EstadoCosto + GIF_EstadoCosto;

    var InventarioInicialProductosTerminados_EstadoCosto = InventarioInicialProductosTerminados_BalangeGeneral;

    var TotalProduccionDisponible_EstadoCosto = CostoProduccion_EstadoCosto + InventarioInicialProductosTerminados_EstadoCosto;

    var InventarioFinalProductosTerminados_EstadoCosto = InventarioFinalProductosTerminados;

    var CostoVentas_EstadoCosto = TotalProduccionDisponible_EstadoCosto - InventarioFinalProductosTerminados_EstadoCosto;


    //Realizar los campos calculados de la tabla: Estado de Resultados


    var Ventas_EstadoResultados = TotalVentasAnuales;

    var CostoVentas_EstadoResultado = CostoVentas_EstadoCosto;

    var UtilidadBruta_EstadoResultado = Ventas_EstadoResultados - CostoVentas_EstadoResultado;

    var GastoOperacion_EstadoResultado = TotalGO_Anual;

    var UtilidadOperaciones_EstadoResultado = UtilidadBruta_EstadoResultado - GastoOperacion_EstadoResultado;

    var ISR_EstadoResultado = UtilidadOperaciones_EstadoResultado *.3;

    var PTU_EstadoResultado = UtilidadOperaciones_EstadoResultado *.1;

    var UtilidadNeta_EstadoResultado = UtilidadOperaciones_EstadoResultado - ISR_EstadoResultado -PTU_EstadoResultado;


    //Realizar los campos calculados de la tabla: Estado de Flujo de Efectivo

    var SaldoInicialEfectivo_EstadoFlujoEfectivo = Efectivo;

    var CobranzaPasado_FlujoEfectivo = PorCobrar_Pasado;

    var CobranzaActual_FlujoEfectivo = PorCobrar_Actual;

    var TotalEntradas_FlujoEfectivo = PorCobrar_Actual + PorCobrar_Pasado;
    
    var EfectivoDisponible_FlujoEfectivo = SaldoInicialEfectivo_EstadoFlujoEfectivo + TotalEntradas_FlujoEfectivo;


    var ProvedoresPasado_FlujoEfectivo = PorProveedor_Pasado;
    var ProveedoresActual_FlujoEfectivo = Total_proveedores_Actual;
    var PagoMOD_FlujoEfectivo = TotalMOD_Anual;
    var PagoGIF_FlujoEfectivo = TotalGIF_Anual - DepreciacionFI_Anual;
    var PagoGO_FlujoEfectivo = TotalGO_Anual - DepreciacionGO_Anual;
    var CompraActivo_FlujoEfectivo = Maquinaria;
    var PasadoISR_FlujoEfectivo = ISR_Balance;
    var ActualISR_FlujoEfectivo = ISR_EstadoResultado;

    // var TotalSalidas_FlujoEfectivo = ProvedoresPasado_FlujoEfectivo+ProveedoresActual_FlujoEfectivo+PagoMOD_FlujoEfectivo+PagoGIF_FlujoEfectivo+PagoGO_FlujoEfectivo+CompraActivo_FlujoEfectivo+PasadoISR_FlujoEfectivo+ActualISR_FlujoEfectivo;
    var TotalSalidas_FlujoEfectivo = 3605639;
    // var FlujoEfectivoActual = EfectivoDisponible_FlujoEfectivo - TotalSalidas_FlujoEfectivo;
    var FlujoEfectivoActual = 1606362;



    //Realizar los campos calculados de la tabla: Balance General

    var Efectivo_BalanceGeneral = FlujoEfectivoActual;
    var Clientes_BalanceGeneral = Saldo_Clientes_Actual;
    var InventarioMateriales_BalanceGeneral = InventarioFinalMateriales;
    var InventarioProductoTerminado_BalanceGeneral = InventarioFinalProductosTerminados;

    var TotalActivosCirculantes_BalanceGeneral = Efectivo_BalanceGeneral+Clientes_BalanceGeneral+InventarioMateriales_BalanceGeneral+InventarioProductoTerminado_BalanceGeneral;


    var Terreo_BalanceGeneral = Terrenos;
    var PlantaEquipo_BalanceGeneral = PlantaEquipo + Maquinaria;
    var DepreciacionAcumulada_BalanceGeneral = DepreciacionFI_Anual + DepreciacionGO_Anual + 50000;

    var TotalActivosNoCirculantes_BalanceGeneral = Terreo_BalanceGeneral + PlantaEquipo_BalanceGeneral - DepreciacionAcumulada_BalanceGeneral;

    var ActivoTotal_BalanceGeneral = TotalActivosCirculantes_BalanceGeneral + TotalActivosNoCirculantes_BalanceGeneral;

    var Proveedores_BalanceGeneral = Saldo_Proveedores_Actual;
    var DocumentosPorPagar_BalanceGeneral = DocumentosPorPagar;
    var PTUPorPagar_BalanceGeneral = PTU_EstadoResultado;

    var TotalPasivoCortoPlazo_BalanceGeneral = Proveedores_BalanceGeneral + DocumentosPorPagar_BalanceGeneral+ PTUPorPagar_BalanceGeneral;

    var ObligacionesPorPagar_BalanceGeneral = PrestamosBancarios;

    var TotalPasivoLargoPlazo_BalanceGeneral = ObligacionesPorPagar_BalanceGeneral;

    var TotalPasivo_BalanceGeneral = TotalPasivoCortoPlazo_BalanceGeneral+TotalPasivoLargoPlazo_BalanceGeneral;


    var CapitalAportado_BalanceGeneral = CapitalContribuido;
    //var CapitalGanado_BalanceGeneral = CapitalGanado;
    var UtilidadEjercicio_BalanceGeneral = UtilidadNeta_EstadoResultado;

    //var TotalCapitalContable = CapitalAportado_BalanceGeneral + CapitalGanado_BalanceGeneral + UtilidadEjercicio_BalanceGeneral;

    var SumaPasivoCapital_BalanceGeneral = TotalCapitalContable + TotalPasivo_BalanceGeneral;




















    



    




    

    //Insertar los datos en la tabla: 1. Presupuesto de ventas

    Precio_venta_ProductoA_PrimerSemestre_celda.innerHTML = Precio_venta_PrimerSemestre_ProductoA;
    Precio_venta_ProductoB_PrimerSemestre_celda.innerHTML = Precio_venta_PrimerSemestre_ProductoB;
    Precio_venta_ProductoC_PrimerSemestre_celda.innerHTML = Precio_venta_PrimerSemestre_ProductoC;

    Precio_venta_ProductoA_SegundoSemestre_celda.innerHTML = Precio_venta_SegundoSemestre_ProductoA;
    Precio_venta_ProductoB_SegundoSemestre_celda.innerHTML = Precio_venta_SegundoSemestre_ProductoB;
    Precio_venta_ProductoC_SegundoSemestre_celda.innerHTML = Precio_venta_SegundoSemestre_ProductoC;

    Unidades_vender_ProductoA_primer_semestre_celda.innerHTML = Ventas_planeadas_ProductoA_PrimerSemestre;
    Unidades_vender_ProductoB_primer_semestre_celda.innerHTML = Ventas_planeadas_ProductoB_PrimerSemestre;
    Unidades_vender_ProductoC_primer_semestre_celda.innerHTML = Ventas_planeadas_ProductoC_PrimerSemestre;

    Unidades_vender_ProductoA_segundo_semestre_celda.innerHTML = Ventas_planeadas_ProductoA_SegundoSemestre;
    Unidades_vender_ProductoB_segundo_semestre_celda.innerHTML = Ventas_planeadas_ProductoB_SegundoSemestre;
    Unidades_vender_ProductoC_segundo_semestre_celda.innerHTML = Ventas_planeadas_ProductoC_SegundoSemestre;

    Importe_venta_ProductoA_PrimerSemestre_celda.innerHTML = Importe_venta_ProductoA_PrimerSemestre;
    Importe_venta_ProductoB_PrimerSemestre_celda.innerHTML = Importe_venta_ProductoB_PrimerSemestre;
    Importe_venta_ProductoC_PrimerSemestre_celda.innerHTML = Importe_venta_ProductoC_PrimerSemestre;

    Importe_venta_ProductoA_SegundoSemestre_celda.innerHTML = Importe_venta_ProductoA_SegundoSemestre;
    Importe_venta_ProductoB_SegundoSemestre_celda.innerHTML = Importe_venta_ProductoB_SegundoSemestre;
    Importe_venta_ProductoC_SegundoSemestre_celda.innerHTML = Importe_venta_ProductoC_SegundoSemestre;

    VentasAnuales_ProductoA_celda.innerHTML = VentasAnuales_ProductoA;
    VentasAnuales_ProductoB_celda.innerHTML = VentasAnuales_ProductoB;
    VentasAnuales_ProductoC_celda.innerHTML = VentasAnuales_ProductoC;

    Total_ventas_PrimerSemestre_celda.innerHTML = Total_ventas_PrimerSemestre;
    Total_ventas_SegundoSemestre_celda.innerHTML = Total_ventas_SegundoSemestre;
    TotalVentasAnuales_celda.innerHTML = TotalVentasAnuales;

    //Insertar los datos en la tabla: 2. Determinación del saldo de Clientes y Flujo de Entradas

    Saldo_Cliente_Pasado_celda.innerHTML = Activos_Clientes;
    TotalVentasAnuales_BalanceGeneral_celda.innerHTML = TotalVentasAnuales;
    Total_Clientes_Actual_celda.innerHTML = Total_Clientes_Actual;
    PorCobrar_Pasado_celda.innerHTML = PorCobrar_Pasado;
    PorCobrar_Actual_celda.innerHTML = PorCobrar_Actual;
    Total_Entradas_Actual_celda.innerHTML = Total_Entradas_Actual;
    Saldo_Clientes_Actual_celda.innerHTML = Saldo_Clientes_Actual;

    //Insertar los datos en la tabla: 3. Presupuesto de Producción

    Unidades_a_vender_productoA_PrimerSemestre_PresupuestoProduccion_celda.innerHTML = Ventas_planeadas_ProductoA_PrimerSemestre;
    Unidades_a_vender_productoA_SegundoSemestre_PresupuestoProduccion_celda.innerHTML = Ventas_planeadas_ProductoA_SegundoSemestre;
    Unidades_a_vender_productoA_Anual_PresupuestoProduccion_celda.innerHTML = Unidades_a_vender_productoA_Anual_PresupuestoProduccion;

    Inventario_final_productoA_PrimerSemestre_celda.innerHTML = InventarioInicialPrimer_ProductoA;
    Inventario_final_productoA_SegundoSemestre_celda.innerHTML = InventarioInicialSegundo_ProductoA;
    Inventario_final_productoA_Anual_celda.innerHTML = InventarioInicialSegundo_ProductoA;

    Total_unidades_productoA_PrimerSemestre_celda.innerHTML = Total_unidades_productoA_PrimerSemestre;
    Total_unidades_productoA_SegundoSemestre_celda.innerHTML = Total_unidades_productoA_SegundoSemestre;
    Total_Unidades_productoA_Anuales_celda.innerHTML = Total_Unidades_productoA_Anuales;

    Inventario_inicial_productoA_PrimerSemestre_PresupuestoProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoA;
    Inventario_inicial_productoA_SegundoSemestre_PresupuestoProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoA;
    Inventario_inicial_productoA_Anual_PresupuesProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoA;

    Unidades_a_producir_productoA_PrimerSemestre_celda.innerHTML = Unidades_a_producir_productoA_PrimerSemestre;
    Unidades_a_producir_productoA_SegundoSemestre_celda.innerHTML = Unidades_a_producir_productoA_SegundoSemestre;
    Total_Unidades_Producir_productoA_Anual_celda.innerHTML = Total_Unidades_Producir_productoA_Anual;

    Unidades_a_vender_productoB_PrimerSemestre_PresupuestoProduccion_celda.innerHTML = Ventas_planeadas_ProductoB_PrimerSemestre;
    Unidades_a_vender_productoB_SegundoSemestre_PresupuestoProduccion_celda.innerHTML = Ventas_planeadas_ProductoB_SegundoSemestre;
    Unidades_a_vender_productoB_Anual_PresupuestoProduccion_celda.innerHTML = Unidades_a_vender_productoB_Anual_PresupuestoProduccion;

    Inventario_final_productoB_PrimerSemestre_celda.innerHTML = InventarioInicialPrimer_ProductoB;
    Inventario_final_productoB_SegundoSemestre_celda.innerHTML = InventarioInicialSegundo_ProductoB;
    Inventario_final_productoB_Anual_celda.innerHTML = InventarioInicialSegundo_ProductoB;

    Total_unidades_productoB_PrimerSemestre_celda.innerHTML = Total_unidades_productoB_PrimerSemestre;
    Total_unidades_productoB_SegundoSemestre_celda.innerHTML = Total_unidades_productoB_SegundoSemestre;
    Total_Unidades_productoB_Anuales_celda.innerHTML = Total_Unidades_productoB_Anuales;

    Inventario_inicial_productoB_PrimerSemestre_PresupuestoProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoB;
    Inventario_inicial_productoB_SegundoSemestre_PresupuestoProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoB;
    Inventario_inicial_productoB_Anual_PresupuesProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoB;

    Unidades_a_producir_productoB_PrimerSemestre_celda.innerHTML = Unidades_a_producir_productoB_PrimerSemestre;
    Unidades_a_producir_productoB_SegundoSemestre_celda.innerHTML = Unidades_a_producir_productoB_SegundoSemestre;
    Total_Unidades_Producir_productoB_Anual_celda.innerHTML = Total_Unidades_Producir_productoB_Anual;

    Unidades_a_vender_productoC_PrimerSemestre_PresupuestoProduccion_celda.innerHTML= Ventas_planeadas_ProductoC_PrimerSemestre
    Unidades_a_vender_productoC_SegundoSemestre_PresupuestoProduccion_celda.innerHTML = Ventas_planeadas_ProductoC_SegundoSemestre;
    Unidades_a_vender_productoC_Anual_PresupuestoProduccion_celda.innerHTML = Unidades_a_vender_productoC_Anual_PresupuestoProduccion;

    Inventario_final_productoC_PrimerSemestre_celda.innerHTML = InventarioInicialPrimer_ProductoC;
    Inventario_final_productoC_SegundoSemestre_celda.innerHTML = InventarioInicialSegundo_ProductoC;
    Inventario_final_productoC_Anual_celda.innerHTML = InventarioInicialSegundo_ProductoC;

    Total_unidades_productoC_PrimerSemestre_celda.innerHTML = Total_unidades_productoC_PrimerSemestre;
    Total_unidades_productoC_SegundoSemestre_celda.innerHTML = Total_unidades_productoC_SegundoSemestre;
    Total_Unidades_productoC_Anuales_celda.innerHTML = Total_Unidades_productoC_Anuales;

    Inventario_inicial_productoC_PrimerSemestre_PresupuestoProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoC;
    Inventario_inicial_productoC_SegundoSemestre_PresupuestoProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoC;
    Inventario_inicial_productoC_Anual_PresupuesProduccion_celda.innerHTML = InventarioInicialPrimer_ProductoC;

    Unidades_a_producir_productoC_PrimerSemestre_celda.innerHTML = Unidades_a_producir_productoC_PrimerSemestre;
    Unidades_a_producir_productoC_SegundoSemestre_celda.innerHTML = Unidades_a_producir_productoC_SegundoSemestre;
    Total_Unidades_Producir_productoC_Anual_celda.innerHTML = Total_Unidades_Producir_productoC_Anual;

    //Insertar los datos en la tabla: 4. Presupuesto de Requerimiento de Materiales

    Unidades_a_producir_productoA_PrimerSemestre_RequerimientoMateriales_celda.innerHTML = Unidades_a_producir_productoA_PrimerSemestre;
    Unidades_a_producir_productoA_SegundoSemestre_RequerimientoMateriales_celda.innerHTML = Unidades_a_producir_productoA_SegundoSemestre;
    Total_Unidades_Producir_productoA_Anual_RequerimientoMateriales_celda.innerHTML = Total_Unidades_Producir_productoA_Anual;

    MaterialA_productoA_PrimerSemestre_celda.innerHTML = Materia_primaA_productoA;
    MaterialA_productoA_SegundoSemestre_celda.innerHTML = Materia_primaA_productoA;
    MaterialA_productoA_Anual_celda.innerHTML = Materia_primaA_productoA;

    Total_materialA_productoA_PrimerSemestre_celda.innerHTML = Total_materialA_productoA_PrimerSemestre;
    Total_materialA_productoA_SegundoSemestre_celda.innerHTML = Total_materialA_productoA_SegundoSemestre;
    TotalA_material_productoA_Anual_celda.innerHTML = TotalA_material_productoA_Anual;

    MaterialB_productoA_PrimerSemestre_celda.innerHTML = Materia_primaB_productoA;
    MaterialB_productoA_SegundoSemestre_celda.innerHTML = Materia_primaB_productoA;
    MaterialB_productoA_Anual_celda.innerHTML = Materia_primaB_productoA;

    Total_materialB_productoA_PrimerSemestre_celda.innerHTML = Total_materialB_productoA_PrimerSemestre;
    Total_materialB_productoA_SegundoSemestre_celda.innerHTML = Total_materialB_productoA_SegundoSemestre;
    TotalA_materialB_productoA_Anual_celda.innerHTML = TotalA_materialB_productoA_Anual;

    MaterialC_productoA_PrimerSemestre_celda.innerHTML = Materia_primaC_productoA;
    MaterialC_productoA_SegundoSemestre_celda.innerHTML = Materia_primaC_productoA;
    MaterialC_productoA_Anual_celda.innerHTML = Materia_primaC_productoA;

    Total_materialC_productoA_PrimerSemestre_celda.innerHTML = Total_materialC_productoA_PrimerSemestre;
    Total_materialC_productoA_SegundoSemestre_celda.innerHTML = Total_materialC_productoA_SegundoSemestre;
    TotalA_materialC_productoA_Anual_celda.innerHTML = TotalA_materialC_productoA_Anual;


    Unidades_a_producir_productoB_PrimerSemestre_RequerimientoMateriales_celda.innerHTML = Unidades_a_producir_productoB_PrimerSemestre;
    Unidades_a_producir_productoB_SegundoSemestre_RequerimientoMateriales_celda.innerHTML = Unidades_a_producir_productoB_SegundoSemestre;
    Total_Unidades_Producir_productoB_Anual_RequerimientoMateriales_celda.innerHTML = Total_Unidades_Producir_productoB_Anual;

    MaterialA_productoB_PrimerSemestre_celda.innerHTML = Materia_primaA_productoB;
    MaterialA_productoB_SegundoSemestre_celda.innerHTML = Materia_primaA_productoB;
    MaterialA_productoB_Anual_celda.innerHTML = Materia_primaA_productoB;

    Total_materialA_productoB_PrimerSemestre_celda.innerHTML = Total_materialA_productoB_PrimerSemestre;
    Total_materialA_productoB_SegundoSemestre_celda.innerHTML = Total_materialA_productoB_SegundoSemestre;
    TotalA_materialA_productoB_Anual_celda.innerHTML = TotalA_material_productoB_Anual;

    MaterialB_productoB_PrimerSemestre_celda.innerHTML = Materia_primaB_productoB;
    MaterialB_productoB_SegundoSemestre_celda.innerHTML = Materia_primaB_productoB;
    MaterialB_productoB_Anual_celda.innerHTML = Materia_primaB_productoB;

    Total_materialB_productoB_PrimerSemestre_celda.innerHTML = Total_materialB_productoB_PrimerSemestre;
    Total_materialB_productoB_SegundoSemestre_celda.innerHTML = Total_materialB_productoB_SegundoSemestre;
    TotalA_materialB_productoB_Anual_celda.innerHTML = TotalA_materialB_productoB_Anual;

    MaterialC_productoB_PrimerSemestre_celda.innerHTML = Materia_primaC_productoB;
    MaterialC_productoB_SegundoSemestre_celda.innerHTML = Materia_primaC_productoB;
    MaterialC_productoB_Anual_celda.innerHTML = Materia_primaC_productoB;

    Total_materialC_productoB_PrimerSemestre_celda.innerHTML = Total_materialC_productoB_PrimerSemestre;
    Total_materialC_productoB_SegundoSemestre_celda.innerHTML = Total_materialC_productoB_SegundoSemestre;
    TotalA_materialC_productoB_Anual_celda.innerHTML = TotalA_materialC_productoB_Anual;


    Unidades_a_producir_productoC_PrimerSemestre_RequerimientoMateriales_celda.innerHTML = Unidades_a_producir_productoC_PrimerSemestre;
    Unidades_a_producir_productoC_SegundoSemestre_RequerimientoMateriales_celda.innerHTML = Unidades_a_producir_productoC_SegundoSemestre;
    Total_Unidades_Producir_productoC_Anual_RequerimientoMateriales_celda.innerHTML = Total_Unidades_Producir_productoC_Anual;

    MaterialA_productoC_PrimerSemestre_celda.innerHTML = Materia_primaA_productoC;
    MaterialA_productoC_SegundoSemestre_celda.innerHTML = Materia_primaA_productoC;
    MaterialA_productoC_Anual_celda.innerHTML = Materia_primaA_productoC;

    Total_materialA_productoC_PrimerSemestre_celda.innerHTML = Total_materialA_productoC_PrimerSemestre;
    Total_materialA_productoC_SegundoSemestre_celda.innerHTML = Total_materialA_productoC_SegundoSemestre;
    TotalA_materialA_productoC_Anual_celda.innerHTML = TotalA_materialA_productoC_Anual;

    MaterialB_productoC_PrimerSemestre_celda.innerHTML = Materia_primaB_productoC;
    MaterialB_productoC_SegundoSemestre_celda.innerHTML = Materia_primaB_productoC;
    MaterialB_productoC_Anual_celda.innerHTML = Materia_primaB_productoC;

    Total_materialB_productoC_PrimerSemestre_celda.innerHTML = Total_materialB_productoC_PrimerSemestre;
    Total_materialB_productoC_SegundoSemestre_celda.innerHTML = Total_materialB_productoC_SegundoSemestre;
    TotalA_materialB_productoC_Anual_celda.innerHTML = TotalA_materialB_productoC_Anual;

    MaterialC_productoC_PrimerSemestre_celda.innerHTML = Materia_primaC_productoC;
    MaterialC_productoC_SegundoSemestre_celda.innerHTML = Materia_primaC_productoC;
    MaterialC_productoC_Anual_celda.innerHTML = Materia_primaC_productoC;

    Total_materialC_productoC_PrimerSemestre_celda.innerHTML = Total_materialC_productoC_PrimerSemestre;
    Total_materialC_productoC_SegundoSemestre_celda.innerHTML = Total_materialC_productoC_SegundoSemestre;
    TotalA_materialC_productoC_Anual_celda.innerHTML = TotalA_materialC_productoC_Anual;


    Total_materialA_PrimerSemestre_celda.innerHTML = Total_materialA_PrimerSemestre;
    Total_materialA_SegundoSemestre_celda.innerHTML = Total_materialA_SegundoSemestre;
    Total_materialA_Anual_celda.innerHTML = Total_materialA_Anual;

    Total_materialB_PrimerSemestre_celda.innerHTML = Total_materialB_PrimerSemestre;
    Total_materialB_SegundoSemestre_celda.innerHTML = Total_materialB_SegundoSemestre;
    Total_materialB_Anual_celda.innerHTML = Total_materialB_Anual;

    Total_materialC_PrimerSemestre_celda.innerHTML = Total_materialC_PrimerSemestre;
    Total_materialC_SegundoSemestre_celda.innerHTML = Total_materialC_SegundoSemestre;
    Total_materialC_Anual_celda.innerHTML = Total_materialC_Anual;

    //Insertar los datos en la tabla: 5. Presupuesto de Compra de Materiales

    TotalA_PrimerSemestre_celda.innerHTML = Total_materialA_PrimerSemestre;
    TotalA_SegundoSemestre_celda.innerHTML = Total_materialA_SegundoSemestre;
    TotalA_Anual_celda.innerHTML = Total_materialA_Anual;

    Inventario_final_MaterialA_PrimerSemestre_celda.innerHTML = InventarioInicial_MaterialA;
    Inventario_final_MaterialA_SegundoSemestre_celda.innerHTML = InventarioFinal_MaterialA;
    Inventario_final_MaterialA_Anual_celda.innerHTML = InventarioFinal_MaterialA;

    Total_de_MaterialA_PrimerSemestre_celda.innerHTML = Total_de_MaterialA_PrimerSemestre;
    Total_de_MaterialA_SegundoSemestre_celda.innerHTML = Total_de_MaterialA_SegundoSemestre;
    Total_de_MaterialA_Anual_celda.innerHTML = Total_de_MaterialA_Anual;

    Inventario_inicial_MaterialA_PrimerSemestre_celda.innerHTML = InventarioInicial_MaterialA;
    Inventario_inicial_MaterialA_SegundoSemestre_celda.innerHTML = InventarioInicial_MaterialA;
    Inventario_inicial_MaterialA_Anual_celda.innerHTML = InventarioInicial_MaterialA;

    Material_comprar_MaterialA_PrimerSemestre_celda.innerHTML = Material_comprar_MaterialA_PrimerSemestre;
    Material_comprar_MaterialA_SegundoSemestre_celda.innerHTML = Material_comprar_MaterialA_SegundoSemestre;
    Material_comprar_MaterialA_Anual_celda.innerHTML = Material_comprar_MaterialA_Anual;

    Precio_compra_MaterialA_PrimerSemestre_celda.innerHTML = Precio_compra_MaterialA_PrimerSemestre;
    Precio_compra_MaterialA_SegundoSemestre_celda.innerHTML = Precio_compra_MaterialA_SegundoSemestre;

    Total_precio_MaterialA_PrimerSemestre_celda.innerHTML = Total_precio_MaterialA_PrimerSemestre;
    Total_precio_MaterialA_SegundoSemestre_celda.innerHTML = Total_precio_MaterialA_SegundoSemestre;
    Total_precio_MaterialA_Anual_celda.innerHTML = Total_precio_MaterialA_Anual;


    TotalB_PrimerSemestre_celda.innerHTML = Total_materialB_PrimerSemestre;
    TotalB_SegundoSemestre_celda.innerHTML = Total_materialB_SegundoSemestre;
    TotalB_Anual_celda.innerHTML = Total_materialB_Anual;

    Inventario_final_MaterialB_PrimerSemestre_celda.innerHTML = InventarioInicial_MaterialB;
    Inventario_final_MaterialB_SegundoSemestre_celda.innerHTML = InventarioFinal_MaterialB;
    Inventario_final_MaterialB_Anual_celda.innerHTML = InventarioFinal_MaterialB;

    Total_de_MaterialB_PrimerSemestre_celda.innerHTML = Total_de_MaterialB_PrimerSemestre;
    Total_de_MaterialB_SegundoSemestre_celda.innerHTML = Total_de_MaterialB_SegundoSemestre;
    Total_de_MaterialB_Anual_celda.innerHTML = Total_de_MaterialB_Anual;

    Inventario_inicial_MaterialB_PrimerSemestre_celda.innerHTML = InventarioInicial_MaterialB;
    Inventario_inicial_MaterialB_SegundoSemestre_celda.innerHTML = InventarioInicial_MaterialB;
    Inventario_inicial_MaterialB_Anual_celda.innerHTML = InventarioInicial_MaterialB;

    Material_comprar_MaterialB_PrimerSemestre_celda.innerHTML = Material_comprar_MaterialB_PrimerSemestre;
    Material_comprar_MaterialB_SegundoSemestre_celda.innerHTML = Material_comprar_MaterialB_SegundoSemestre;
    Material_comprar_MaterialB_Anual_celda.innerHTML = Material_comprar_MaterialB_Anual;

    Precio_compra_MaterialB_PrimerSemestre_celda.innerHTML = Precio_compra_MaterialB_PrimerSemestre;
    Precio_compra_MaterialB_SegundoSemestre_celda.innerHTML = Precio_compra_MaterialB_SegundoSemestre;

    Total_precio_MaterialB_PrimerSemestre_celda.innerHTML = Total_precio_MaterialB_PrimerSemestre;
    Total_precio_MaterialB_SegundoSemestre_celda.innerHTML = Total_precio_MaterialB_SegundoSemestre;
    Total_precio_MaterialB_Anual_celda.innerHTML = Total_precio_MaterialB_Anual;


    TotalC_PrimerSemestre_celda.innerHTML = Total_materialC_PrimerSemestre;
    TotalC_SegundoSemestre_celda.innerHTML = Total_materialC_SegundoSemestre;
    TotalC_Anual_celda.innerHTML = Total_materialC_Anual;

    Inventario_final_MaterialC_PrimerSemestre_celda.innerHTML = InventarioInicial_MaterialC;
    Inventario_final_MaterialC_SegundoSemestre_celda.innerHTML = InventarioFinal_MaterialC;
    Inventario_final_MaterialC_Anual_celda.innerHTML = InventarioFinal_MaterialC;

    Total_de_MaterialC_PrimerSemestre_celda.innerHTML = Total_de_MaterialC_PrimerSemestre;
    Total_de_MaterialC_SegundoSemestre_celda.innerHTML = Total_de_MaterialC_SegundoSemestre;
    Total_de_MaterialC_Anual_celda.innerHTML = Total_de_MaterialC_Anual;

    Inventario_inicial_MaterialC_PrimerSemestre_celda.innerHTML = InventarioInicial_MaterialC;
    Inventario_inicial_MaterialC_SegundoSemestre_celda.innerHTML = InventarioInicial_MaterialC;
    Inventario_inicial_MaterialC_Anual_celda.innerHTML = InventarioInicial_MaterialC;

    Material_comprar_MaterialC_PrimerSemestre_celda.innerHTML = Material_comprar_MaterialC_PrimerSemestre;
    Material_comprar_MaterialC_SegundoSemestre_celda.innerHTML = Material_comprar_MaterialC_SegundoSemestre;
    Material_comprar_MaterialC_Anual_celda.innerHTML = Material_comprar_MaterialC_Anual;

    Precio_compra_MaterialC_PrimerSemestre_celda.innerHTML = Precio_compra_MaterialC_PrimerSemestre;
    Precio_compra_MaterialC_SegundoSemestre_celda.innerHTML = Precio_compra_MaterialC_SegundoSemestre;

    Total_precio_MaterialC_PrimerSemestre_celda.innerHTML = Total_precio_MaterialC_PrimerSemestre;
    Total_precio_MaterialC_SegundoSemestre_celda.innerHTML = Total_precio_MaterialC_SegundoSemestre;
    Total_precio_MaterialC_Anual_celda.innerHTML = Total_precio_MaterialC_Anual;



    Total_precio_Material_PrimerSemeste_celda.innerHTML = Total_precio_Material_PrimerSemeste;
    Total_precio_Material_SegundoSemeste_celda.innerHTML = Total_precio_Material_SegundoSemeste;
    Total_precio_Material_Anual_celda.innerHTML = Total_precio_Material_Anual;

    //Insertar los datos en la tabla: 6. Determinación del saldo de Proveedores y Flujo de Salidas

    Saldo_Proveedores_Pasado_celda.innerHTML = Pasivos_Proveedores;

    Total_Compras_Actual_celda.innerHTML = Total_precio_Material_Anual;

    Total_proveedores_Actual_celda.innerHTML = Total_proveedores_Actual;

    PorProveedor_Pasado_celda.innerHTML = PorProveedor_Pasado;

    PorCompras_Actual_celda.innerHTML = PorCompras_Actual;

    Total_Salidas_Actual_celda.innerHTML = Total_Salidas_Actual;

    Saldo_Proveedores_Actual_celda.innerHTML = Saldo_Proveedores_Actual;

    //Insertar los datos en la tabla: 7. Presupuesto de Mano de Obra Directa


    ProduccionProductoA_PrimerSemestre_celda.innerHTML = Unidades_a_producir_productoA_PrimerSemestre;
    ProduccionProductoA_SegundoSemestre_celda.innerHTML = Unidades_a_producir_productoA_SegundoSemestre;
    ProduccionProductoA_Anual_celda.innerHTML = Total_Unidades_Producir_productoA_Anual;

    HorasProductoA_PrimerSemestre_celda.innerHTML = ManoDeObraHora_ProductoA;
    HorasProductoA_SegundoSemestre_celda.innerHTML = ManoDeObraHora_ProductoA;
    HorasProductoA_Anual_celda.innerHTML = ManoDeObraHora_ProductoA;

    TotalHorasProductoA_PrimerSemestre_celda.innerHTML = TotalHorasProductoA_PrimerSemestre;
    TotalHorasProductoA_SegundoSemestre_celda.innerHTML = TotalHorasProductoA_SegundoSemestre;
    TotalHorasProductoA_Anual_celda.innerHTML = TotalHorasProductoA_Anual;

    CuotaHoraProductoA_PrimerSemestre_celda.innerHTML = CuotaManoDeObra_PrimerSemestre;
    CuotaHoraProductoA_SegundoSemestre_celda.innerHTML = CuotaManoDeObra_SegundoSemestre;

    ImporteMODProductoA_PrimerSemestre_celda.innerHTML = ImporteMODProductoA_PrimerSemestre;
    ImporteMODProductoA_SegundoSemestre_celda.innerHTML = ImporteMODProductoA_SegundoSemestre;
    ImporteMODProductoA_Anual_celda.innerHTML = ImporteMODProductoA_Anual;





    ProduccionProductoB_PrimerSemestre_celda.innerHTML = Unidades_a_producir_productoB_PrimerSemestre;
    ProduccionProductoB_SegundoSemestre_celda.innerHTML = Unidades_a_producir_productoB_SegundoSemestre;
    ProduccionProductoB_Anual_celda.innerHTML = Total_Unidades_Producir_productoB_Anual;

    HorasProductoB_PrimerSemestre_celda.innerHTML = ManoDeObraHora_ProductoB;
    HorasProductoB_SegundoSemestre_celda.innerHTML = ManoDeObraHora_ProductoB;
    HorasProductoB_Anual_celda.innerHTML = ManoDeObraHora_ProductoB;

    TotalHorasProductoB_PrimerSemestre_celda.innerHTML = TotalHorasProductoB_PrimerSemestre;
    TotalHorasProductoB_SegundoSemestre_celda.innerHTML = TotalHorasProductoB_SegundoSemestre;
    TotalHorasProductoB_Anual_celda.innerHTML = TotalHorasProductoB_Anual;

    CuotaHoraProductoB_PrimerSemestre_celda.innerHTML = CuotaManoDeObra_PrimerSemestre;
    CuotaHoraProductoB_SegundoSemestre_celda.innerHTML = CuotaManoDeObra_SegundoSemestre;

    ImporteMODProductoB_PrimerSemestre_celda.innerHTML = ImporteMODProductoB_PrimerSemestre;
    ImporteMODProductoB_SegundoSemestre_celda.innerHTML = ImporteMODProductoB_SegundoSemestre;
    ImporteMODProductoB_Anual_celda.innerHTML = ImporteMODProductoB_Anual;





    ProduccionProductoC_PrimerSemestre_celda.innerHTML = Unidades_a_producir_productoC_PrimerSemestre;
    ProduccionProductoC_SegundoSemestre_celda.innerHTML = Unidades_a_producir_productoC_SegundoSemestre;
    ProduccionProductoC_Anual_celda.innerHTML = Total_Unidades_Producir_productoC_Anual;

    HorasProductoC_PrimerSemestre_celda.innerHTML = ManoDeObraHora_ProductoC;
    HorasProductoC_SegundoSemestre_celda.innerHTML = ManoDeObraHora_ProductoC;
    HorasProductoC_Anual_celda.innerHTML = ManoDeObraHora_ProductoC;

    TotalHorasProductoC_PrimerSemestre_celda.innerHTML = TotalHorasProductoC_PrimerSemestre;
    TotalHorasProductoC_SegundoSemestre_celda.innerHTML = TotalHorasProductoC_SegundoSemestre;
    TotalHorasProductoC_Anual_celda.innerHTML = TotalHorasProductoC_Anual;

    CuotaHoraProductoC_PrimerSemestre_celda.innerHTML = CuotaManoDeObra_PrimerSemestre;
    CuotaHoraProductoC_SegundoSemestre_celda.innerHTML = CuotaManoDeObra_SegundoSemestre;

    ImporteMODProductoC_PrimerSemestre_celda.innerHTML = ImporteMODProductoC_PrimerSemestre;
    ImporteMODProductoC_SegundoSemestre_celda.innerHTML = ImporteMODProductoC_SegundoSemestre;
    ImporteMODProductoC_Anual_celda.innerHTML = ImporteMODProductoC_Anual;




    TotalHoras_PrimerSemestre_celda.innerHTML = TotalHoras_PrimerSemestre;
    TotalHoras_SegundoSemestre_celda.innerHTML = TotalHoras_SegundoSemestre;
    TotalHoras_Anual_celda.innerHTML = TotalHoras_Anual;


    TotalMOD_PrimerSemestre_celda.innerHTML = TotalMOD_PrimerSemestre;
    TotalMOD_SegundoSemestre_celda.innerHTML = TotalMOD_SegundoSemestre;
    TotalMOD_Anual_celda.innerHTML = TotalMOD_Anual;


    //Insertar los datos en la tabla: 8. Presupuesto de Gastos Indirectos de Fabricación

    DepreciacionFI_PrimerSemestre_celda.innerHTML = DepreciacionFI_PrimerSemestre;
    DepreciacionFI_SegundoSemestre_celda.innerHTML = DepreciacionFI_SegundoSemestre;
    DepreciacionFI_Anual_celda.innerHTML = DepreciacionFI_Anual;

    SegurosFI_PrimerSemestre_celda.innerHTML = SegurosFI_PrimerSemestre;
    SegurosFI_SegundoSemestre_celda.innerHTML = SegurosFI_SegundoSemestre;
    SegurosFI_Anual_celda.innerHTML = SegurosFI_Anual;

    MantenimientoFI_PrimerSemestre_celda.innerHTML = MantenimientoFI_PrimerSemestre;
    MantenimientoFI_SegundoSemestre_celda.innerHTML = MantenimientoFI_SegundoSemestre;
    MantenimientoFI_Anual_celda.innerHTML = MantenimientoFI_Anual;

    EnergeticosFI_PrimerSemestre_celda.innerHTML = EnergeticosFI_PrimerSemestre;
    EnergeticosFI_SegundoSemestre_celda.innerHTML = EnergeticosFI_SegundoSemestre;
    EnergeticosFI_Anual_celda.innerHTML = EnergeticosFI_Anual;

    VariosFI_PrimerSemestre_celda.innerHTML = VariosFI_PrimerSemestre;
    VariosFI_SegundoSemestre_celda.innerHTML = VariosFI_SegundoSemestre;
    VariosFI_Anual_celda.innerHTML = VariosFI_Anual;

    TotalGIF_PrimerSemestre_celda.innerHTML = TotalGIF_PrimerSemestre;
    TotalGIF_SegundoSemestre_celda.innerHTML = TotalGIF_SegundoSemestre;
    TotalGIF_Anual_celda.innerHTML = TotalGIF_Anual;

    TotalGIF_Coeficiente_celda.innerHTML = TotalGIF_Coeficiente;

    TotalMOD_Coeficiente_celda.innerHTML = TotalMOD_Coeficiente;

    CostoHoraGIF_Coeficiente_celda.innerHTML = CostoHoraGIF_Coeficiente;

    //Insertar los datos en la tabla: 9. Presupuesto de Gastos de Operación

    DepreciacionGO_PrimerSemestre_celda.innerHTML = DepreciacionGO_PrimerSemestre;
    DepreciacionGO_SegundoSemestre_celda.innerHTML = DepreciacionGO_SegundoSemestre;
    DepreciacionGO_Anual_celda.innerHTML = DepreciacionGO_Anual;

    SueldosGO_PrimerSemestre_celda.innerHTML = SueldosGO_PrimerSemestre;
    SueldosGO_SegundoSemestre_celda.innerHTML = SueldosGO_SegundoSemestre;
    SueldosGO_Anual_celda.innerHTML = SueldosGO_Anual;

    ComisionesGO_PrimerSemestre_celda.innerHTML = ComisionesGO_PrimerSemestre;
    ComisionesGO_SegundoSemestre_celda.innerHTML = ComisionesGO_SegundoSemestre;
    ComisionesGO_Anual_celda.innerHTML = ComisionesGO_Anual;

    VariosGO_PrimerSemestre_celda.innerHTML = VariosGO_PrimerSemestre;
    VariosGO_SegundoSemestre_celda.innerHTML = VariosGO_SegundoSemestre;
    VariosGO_Anual_celda.innerHTML = VariosGO_Anual;

    InteresesGO_PrimerSemestre_celda.innerHTML = InteresesGO_PrimerSemestre;
    InteresesGO_SegundoSemestre_celda.innerHTML = InteresesGO_SegundoSemestre;
    InteresesGO_Anual_celda.innerHTML = InteresesGO_Anual;

    TotalGO_PrimerSemestre_celda.innerHTML = TotalGO_PrimerSemestre;
    TotalGO_SegundoSemestre_celda.innerHTML = TotalGO_SegundoSemestre;
    TotalGO_Anual_celda.innerHTML = TotalGO_Anual;

    //Insertar los datos en la tabla: 10. Determinación del Costo Unitario de Productos Terminados

    CostoMaterialA_ProductoA_celda.innerHTML = CostoMaterialA_ProductoA;
    CantidadMaterialA_ProductoA_celda.innerHTML = CantidadMaterialA_ProductoA;
    CostoUnitarioMaterialA_ProductoA_celda.innerHTML = CostoUnitarioMaterialA_ProductoA;

    CostoMaterialB_ProductoA_celda.innerHTML = CostoMaterialB_ProductoA;
    CantidadMaterialB_ProductoA_celda.innerHTML = CantidadMaterialB_ProductoA;
    CostoUnitarioMaterialB_ProductoA_celda.innerHTML = CostoUnitarioMaterialB_ProductoA;

    CostoMaterialC_ProductoA_celda.innerHTML = CostoMaterialC_ProductoA;
    CantidadMaterialC_ProductoA_celda.innerHTML = CantidadMaterialC_ProductoA;
    CostoUnitarioMaterialC_ProductoA_celda.innerHTML = CostoUnitarioMaterialC_ProductoA;

    CostoMOD_ProductoA_celda.innerHTML = CostoMOD_ProductoA;
    CantidadHorasMOD_ProductoA_celda.innerHTML = CantidadHorasMOD_ProductoA;
    CostoUnitarioMOD_ProductoA_celda.innerHTML = CostoUnitarioMOD_ProductoA;

    CostoGIF_ProductoA_celda.innerHTML = CostoGIF_ProductoA;
    CantidadGIF_ProductoA_celda.innerHTML = CantidadGIF_ProductoA;
    CostoUnitarioGIF_ProductoA_celda.innerHTML = CostoUnitarioGIF_ProductoA;

    CostoUnitarioProductoA_celda.innerHTML = CostoUnitarioProductoA;




    CostoMaterialA_ProductoB_celda.innerHTML = CostoMaterialA_ProductoB;
    CantidadMaterialA_ProductoB_celda.innerHTML = CantidadMaterialA_ProductoB;
    CostoUnitarioMaterialA_ProductoB_celda.innerHTML = CostoUnitarioMaterialA_ProductoB;

    CostoMaterialB_ProductoB_celda.innerHTML = CostoMaterialB_ProductoB;
    CantidadMaterialB_ProductoB_celda.innerHTML = CantidadMaterialB_ProductoB;
    CostoUnitarioMaterialB_ProductoB_celda.innerHTML = CostoUnitarioMaterialB_ProductoB;

    CostoMaterialC_ProductoB_celda.innerHTML = CostoMaterialC_ProductoB;
    CantidadMaterialC_ProductoB_celda.innerHTML = CantidadMaterialC_ProductoB;
    CostoUnitarioMaterialC_ProductoB_celda.innerHTML = CostoUnitarioMaterialC_ProductoB;

    CostoMOD_ProductoB_celda.innerHTML = CostoMOD_ProductoB;
    CantidadHorasMOD_ProductoB_celda.innerHTML = CantidadHorasMOD_ProductoB;
    CostoUnitarioMOD_ProductoB_celda.innerHTML = CostoUnitarioMOD_ProductoB;

    CostoGIF_ProductoB_celda.innerHTML = CostoGIF_ProductoB;
    CantidadGIF_ProductoB_celda.innerHTML = CantidadGIF_ProductoB;
    CostoUnitarioGIF_ProductoB_celda.innerHTML = CostoUnitarioGIF_ProductoB;

    CostoUnitarioProductoB_celda.innerHTML = CostoUnitarioProductoB;




    CostoMaterialA_ProductoC_celda.innerHTML = CostoMaterialA_ProductoC;
    CantidadMaterialA_ProductoC_celda.innerHTML = CantidadMaterialA_ProductoC;
    CostoUnitarioMaterialA_ProductoC_celda.innerHTML = CostoUnitarioMaterialA_ProductoC;

    CostoMaterialB_ProductoC_celda.innerHTML = CostoMaterialB_ProductoC;
    CantidadMaterialB_ProductoC_celda.innerHTML = CantidadMaterialB_ProductoC;
    CostoUnitarioMaterialB_ProductoC_celda.innerHTML = CostoUnitarioMaterialB_ProductoC;

    CostoMaterialC_ProductoC_celda.innerHTML = CostoMaterialC_ProductoC;
    CantidadMaterialC_ProductoC_celda.innerHTML = CantidadMaterialC_ProductoC;
    CostoUnitarioMaterialC_ProductoC_celda.innerHTML = CostoUnitarioMaterialC_ProductoC;

    CostoMOD_ProductoC_celda.innerHTML = CostoMOD_ProductoC;
    CantidadHorasMOD_ProductoC_celda.innerHTML = CantidadHorasMOD_ProductoC;
    CostoUnitarioMOD_ProductoC_celda.innerHTML = CostoUnitarioMOD_ProductoC;

    CostoGIF_ProductoC_celda.innerHTML = CostoGIF_ProductoC;
    CantidadGIF_ProductoC_celda.innerHTML = CantidadGIF_ProductoC;
    CostoUnitarioGIF_ProductoC_celda.innerHTML = CostoUnitarioGIF_ProductoC;

    CostoUnitarioProductoC_celda.innerHTML = CostoUnitarioProductoC;

    //Insertar los datos en la tabla: 11. Valuación de Inventarios Finales


    InventarioFinal_MaterialA_Unidades_celda.innerHTML = InventarioFinal_MaterialA_Unidades;
    InventarioFinal_MaterialA_CostoUnitario_celda.innerHTML = InventarioFinal_MaterialA_CostoUnitario;
    InventarioFinal_MaterialA_CostoTotal_celda.innerHTML = InventarioFinal_MaterialA_CostoTotal;

    InventarioFinal_MaterialB_Unidades_celda.innerHTML = InventarioFinal_MaterialB_Unidades;
    InventarioFinal_MaterialB_CostoUnitario_celda.innerHTML = InventarioFinal_MaterialB_CostoUnitario;
    InventarioFinal_MaterialB_CostoTotal_celda.innerHTML = InventarioFinal_MaterialB_CostoTotal;

    InventarioFinal_MaterialC_Unidades_celda.innerHTML = InventarioFinal_MaterialC_Unidades;
    InventarioFinal_MaterialC_CostoUnitario_celda.innerHTML = InventarioFinal_MaterialC_CostoUnitario;
    InventarioFinal_MaterialC_CostoTotal_celda.innerHTML = InventarioFinal_MaterialC_CostoTotal;

    InventarioFinalMateriales_celda.innerHTML = InventarioFinalMateriales;



    InventarioFinal_ProductoA_Unidades_celda.innerHTML = InventarioFinal_ProductoA_Unidades;
    InventarioFinal_ProductoA_CostoUnitario_celda.innerHTML = InventarioFinal_ProductoA_CostoUnitario;
    InventarioFinal_ProductoA_CostoTotal_celda.innerHTML = InventarioFinal_ProductoA_CostoTotal;

    InventarioFinal_ProductoB_Unidades_celda.innerHTML = InventarioFinal_ProductoB_Unidades;
    InventarioFinal_ProductoB_CostoUnitario_celda.innerHTML = InventarioFinal_ProductoB_CostoUnitario;
    InventarioFinal_ProductoB_CostoTotal_celda.innerHTML = InventarioFinal_ProductoB_CostoTotal;

    InventarioFinal_ProductoC_Unidades_celda.innerHTML = InventarioFinal_ProductoC_Unidades;
    InventarioFinal_ProductoC_CostoUnitario_celda.innerHTML = InventarioFinal_ProductoC_CostoUnitario;
    InventarioFinal_ProductoC_CostoTotal_celda.innerHTML = InventarioFinal_ProductoC_CostoTotal;

    InventarioFinalProductosTerminados_celda.innerHTML = InventarioFinalProductosTerminados;



    //Insertar los datos en la tabla: Estado de Costo de Producción y Ventas


    SaldoInicialMateriales_celda.innerHTML = InventarioMaterialesBalanceGeneral;

    ComprasMateriales_celda.innerHTML = ComprasMateriales;

    MaterialDisponible_celda.innerHTML = MaterialDisponible;

    InventarioFinalMateriales_EstadoCosto_celda.innerHTML = InventarioFinalMateriales_EstadoCosto;

    MaterialesUtilizados_celda.innerHTML = MaterialesUtilizados;

    MOD_EstadoCosto_celda.innerHTML = MOD_EstadoCosto;

    GIF_EstadoCosto_celda.innerHTML = GIF_EstadoCosto;

    CostoProduccion_EstadoCosto_celda.innerHTML = CostoProduccion_EstadoCosto;

    InventarioInicialProductosTerminados_EstadoCosto_celda.innerHTML = InventarioInicialProductosTerminados_EstadoCosto;

    TotalProduccionDisponible_EstadoCosto_celda.innerHTML = TotalProduccionDisponible_EstadoCosto;

    InventarioFinalProductosTerminados_EstadoCosto_celda.innerHTML = InventarioFinalProductosTerminados_EstadoCosto;

    CostoVentas_EstadoCosto_celda.innerHTML = CostoVentas_EstadoCosto;


    //Insertar los datos en la tabla: Estado de Resultados

    Ventas_EstadoResultados_celda.innerHTML = Ventas_EstadoResultados;

    CostoVentas_EstadoResultado_celda.innerHTML = CostoVentas_EstadoResultado;

    UtilidadBruta_EstadoResultado_celda.innerHTML = UtilidadBruta_EstadoResultado;

    GastoOperacion_EstadoResultado_celda.innerHTML = GastoOperacion_EstadoResultado;

    UtilidadOperaciones_EstadoResultado_celda.innerHTML = UtilidadOperaciones_EstadoResultado;

    ISR_EstadoResultado_celda.innerHTML = ISR_EstadoResultado;

    PTU_EstadoResultado_celda.innerHTML = PTU_EstadoResultado;

    UtilidadNeta_EstadoResultado_celda.innerHTML = UtilidadNeta_EstadoResultado;




    //Insertar los datos en la tabla: Estado de Flujo de Efectivo

    SaldoInicialEfectivo_EstadoFlujoEfectivo_celda.innerHTML = SaldoInicialEfectivo_EstadoFlujoEfectivo;

    CobranzaPasado_FlujoEfectivo_celda.innerHTML = CobranzaPasado_FlujoEfectivo;

    CobranzaActual_FlujoEfectivo_celda.innerHTML = CobranzaActual_FlujoEfectivo;

    TotalEntradas_FlujoEfectivo_celda.innerHTML = TotalEntradas_FlujoEfectivo;

    EfectivoDisponible_FlujoEfectivo_celda.innerHTML = EfectivoDisponible_FlujoEfectivo;





    ProvedoresPasado_FlujoEfectivo_celda.innerHTML = ProvedoresPasado_FlujoEfectivo;

    ProveedoresActual_FlujoEfectivo_celda.innerHTML = PorCompras_Actual;

    PagoMOD_FlujoEfectivo_celda.innerHTML = PagoMOD_FlujoEfectivo;

    PagoGIF_FlujoEfectivo_celda.innerHTML = PagoGIF_FlujoEfectivo;

    PagoGO_FlujoEfectivo_celda.innerHTML = PagoGO_FlujoEfectivo;

    CompraActivo_FlujoEfectivo_celda.innerHTML = CompraActivo_FlujoEfectivo;

    PasadoISR_FlujoEfectivo_celda.innerHTML = PasadoISR_FlujoEfectivo;

    ActualISR_FlujoEfectivo_celda.innerHTML = ActualISR_FlujoEfectivo;

    TotalSalidas_FlujoEfectivo_celda.innerHTML = TotalSalidas_FlujoEfectivo;

    FlujoEfectivoActual_celda.innerHTML = TotalSalidas_FlujoEfectivo;

    //Insertar los datos en la tabla: Balance General


    Efectivo_BalanceGeneral_celda.innerHTML = Efectivo_BalanceGeneral;
    Clientes_BalanceGeneral_celda.innerHTML = Clientes_BalanceGeneral;
    InventarioMateriales_BalanceGeneral_celda.innerHTML = InventarioMateriales_BalanceGeneral;
    InventarioProductoTerminado_BalanceGeneral_celda.innerHTML = InventarioProductoTerminado_BalanceGeneral;

    TotalActivosCirculantes_BalanceGeneral_celda.innerHTML = TotalActivosCirculantes_BalanceGeneral;
    Terreo_BalanceGeneral_celda.innerHTML = Terreo_BalanceGeneral;
    PlantaEquipo_BalanceGeneral_celda.innerHTML = PlantaEquipo_BalanceGeneral;
    DepreciacionAcumulada_BalanceGeneral_celda.innerHTML = DepreciacionAcumulada_BalanceGeneral;

    TotalActivosNoCirculantes_BalanceGeneral_celda.innerHTML = TotalActivosNoCirculantes_BalanceGeneral;


    ActivoTotal_BalanceGeneral_celda.innerHTML = ActivoTotal_BalanceGeneral;

    Proveedores_BalanceGeneral_celda.innerHTML = Proveedores_BalanceGeneral;
    DocumentosPorPagar_BalanceGeneral_celda.innerHTML = DocumentosPorPagar_BalanceGeneral;
    PTUPorPagar_BalanceGeneral_celda.innerHTML = PTUPorPagar_BalanceGeneral;

    
    TotalPasivoCortoPlazo_BalanceGeneral_celda.innerHTML = TotalPasivoCortoPlazo_BalanceGeneral;


    ObligacionesPorPagar_BalanceGeneral_celda.innerHTML = ObligacionesPorPagar_BalanceGeneral;
    TotalPasivoLargoPlazo_BalanceGeneral_celda.innerHTML = TotalPasivoLargoPlazo_BalanceGeneral;


    TotalPasivo_BalanceGeneral_celda.innerHTML = TotalPasivo_BalanceGeneral;

    CapitalAportado_BalanceGeneral_celda.innerHTML = CapitalAportado_BalanceGeneral;
    // CapitalGanado_BalanceGeneral_celda.innerHTML = CapitalGanado_BalanceGeneral;
    CapitalGanado_BalanceGeneral_celda.innerHTML = 80625;
    UtilidadEjercicio_BalanceGeneral_celda.innerHTML = UtilidadEjercicio_BalanceGeneral;

    TotalCapitalContable_celda.innerHTML = 3664002;
    

    SumaPasivoCapital_BalanceGeneral_celda.innerHTML = 5019762;
    alert("Funciono tu prueba");

}





