<%-- 
    Document   : graficosExamenes
    Created on : 30-jul-2021, 0:52:54
    Author     : User
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Gráficos</title>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">        
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>        
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.0/chart.js" integrity="sha512-XcsV/45eM/syxTudkE8AoKK1OfxTrlFpOltc9NmHXh3HF+0ZA917G9iG6Fm7B6AzP+UeEzV8pLwnbRNPxdUpfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    </head>
    <body class="container" onload="">
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
            <a class="navbar-brand" href="index.jsp">Laboratorio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.jsp">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a href="graficosExamenes.jsp" class="nav-link btn" >
                            Información
                        </a>
                        <!--<a  href="#">información</a>-->
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Examenes
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">

                            <button class="dropdown-item" data-toggle="modal" data-target="#exampleModal">Registrar examen</button>
                            <button class="dropdown-item" data-toggle="modal" data-target="#exampleModal2">Registrar insumo</button>
                            <a class="dropdown-item" href="index.jsp">Listado de examen</a>
                            <a class="dropdown-item" href="indexInsumo.jsp">Listado de insumo</a>
                            <div class="dropdown-divider">Grafica de examenes</div>                            
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="#">Salir</a>
                    </li>
                </ul>

            </div>
        </nav>
    <did class="container">
        <div class="row" >
            <div class="col-3" >  
                <canvas id="myChartX" width="100" height="100">

                </canvas>
            </div>
            <div class="col-3" >  
                <canvas id="myChartY" width="100" height="100"></canvas>
            </div>
            <div class="col-3" >  
                <canvas id="myChartZ" width="100" height="100"></canvas>
            </div>
            <div class="col-3" >  
                <canvas id="myChartW" width="100" height="100"></canvas>
            </div>
        </div>

        <div class="row">
            <div class="col-12 p-0 m-0">
                <div class="card" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Examenes por año</h5>
                        <div>
                            <canvas id="myChartAnio" width="350" height="200">

                            </canvas>
                        </div>                        
                        <p class="card-text"></p>                                              
                    </div>
                </div>
            </div> 
        </div>
        <div class="row">
            <div class="col-12">
                <h5>Enfermedades</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-6 p-0 m-0">    
                <div class="card" style="width: 100%;">
                    <div class="card-body">                       
                        <div class="row">
                            <div class="col-sm-6">
                                <canvas id="myChart" width="50" height="50"></canvas>
                            </div> 
                            <div class="col-sm-6">
                                <canvas id="myChartG" style="height: 50px; width: 50px"  ></canvas>
                            </div>
                        </div>   
                        <div class="row ">
                            <div class="col-12">
                                <div style="width: 100%; height: 100px">
                                    <canvas id="myChartUltimate" ></canvas>
                                </div>                                
                            </div>                            
                        </div>
                        <p class="card-text"></p>                                              
                    </div>
                </div>
            </div>      
            <div class="col-6 p-0 mb-0" style="width: 100%;" >
                <div class="card" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Promedio</h5> 
                       
                            <canvas id="myChartP" width="50" height="50"></canvas>
                       
                        <p class="card-text"></p>                                              
                    </div>
                </div>
            </div> 
        </div>
        <div class="row" style="margin-top: 1px" >                      
                <div  class="col-12">
                    <div style="font: bold">Consulta de información por paciente:</div><br>
                </div>                                             
                <div class="col-10">
                    <input  class="form-control" type="text" placeholder="">
                </div>
                <div class="col-2">
                    <button class="btn btn-danger" type="button" >Buscar</button>
                </div>           
        </div>
    </did>


    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Formulario ingreso</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="https://localhost/Php/add.php" method="POST" enctype="" >
                    <div class="modal-body">

                        <div class="alert alert-danger" hidden="True" role="alert">
                            Toda la información debe ser llenada
                        </div>
                        <div class="form-row">

                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Nombre:</label>
                                <input name="Nombre" type="text" class="form-control form-control-sm" id="inputEmail4" >
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Apellido:</label>
                                <input name="Apellido"  type="text" class="form-control form-control-sm" id="inputPassword4" >
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Fecha nacimientos:</label>
                                <input name="FechaNacimiento"  type="text" class="form-control form-control-sm" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="inputPassword4">DNI:</label>
                                <input name="DNI" type="number" class="form-control form-control-sm" id="inputPassword4" >
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">Genero:</label>
                                <select  class="form-control form-control-sm" name="Genero">
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>Sin especificar</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label  for="inputEmail4">Leucocitos:</label>
                                <input name="Leucocitos" type="number" class="form-control form-control-sm" id="inputEmail4" >
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Hemoglobina:</label>
                                <input name="Hemoglobina" type="number" class="form-control form-control-sm" id="inputPassword4" >
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Hematocrito:</label>
                                <input name="Hematocrito" type="number" class="form-control form-control-sm" id="inputEmail4" >
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Hematies:</label>
                                <input name="Hematies" type="number" class="form-control form-control-sm" id="inputPassword4" >
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputEmail4">V.C.M</label>
                                <input name="VCM" type="number" class="form-control form-control-sm" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">H.C.M</label>
                                <input name="HCM" type="number" class="form-control form-control-sm" id="inputPassword4">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">C.H.C.M</label>
                                <input name="CHCM" type="number" class="form-control form-control-sm" id="inputPassword4">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">R.D.W.C.V</label>
                                <input name="RDWCV" type="number" class="form-control form-control-sm" id="inputPassword4">
                            </div>
                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Linfocitos:</label>
                                <input name="Linfocitos" type="number" class="form-control form-control-sm" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Monocitos:</label>
                                <input name="Monocitos" type="number" class="form-control form-control-sm" id="inputPassword4">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Eosinofilos:</label>
                                <input name="Eosinofilos" type="number" class="form-control form-control-sm" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Basofilos:</label>
                                <input name="Basofilos" type="number" class="form-control form-control-sm" id="inputPassword4">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">V.P.M.</label>
                                <input name="VPM" type="number" class="form-control form-control-sm" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Plaquetas:</label>
                                <input name="Plaquetas" type="number" class="form-control form-control-sm" id="inputPassword4">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputAddress2">Diagnósticos medico:</label>
                            <textarea name="Diagnosticos" class="form-control" >                                    
                            </textarea>                                
                        </div>                          

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <input type="submit" class="btn btn-primary" value="Guardar">
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Formulario ingreso</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="https://localhost/Php/add.php" method="POST" enctype="" >
                    <div class="modal-body">

                        <div class="alert alert-danger" hidden="True" role="alert">
                            Toda la información debe ser llenada
                        </div>
                        <div class="form-row">

                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Nombre de insumo:</label>
                                <input name="Nombre" type="text" class="form-control form-control-sm" id="inputEmail4" >
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Fecha compra:</label>
                                <input name="FechaNacimiento"  type="text" class="form-control form-control-sm" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-5">
                                <label for="inputPassword4">Código de Insumo:</label>
                                <input name="DNI" type="number" class="form-control form-control-sm" id="inputPassword4" >
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">Categoria:</label>
                                <select  class="form-control form-control-sm" name="Genero">
                                    <option>Muebles</option>
                                    <option>Medicina</option>
                                    <option>Materia desechable</option>
                                </select>
                            </div>
                        </div> 

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Unidades:</label>
                                <input name="VPM" type="number" class="form-control form-control-sm" id="inputEmail4">
                            </div>  
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Cantidad:</label>
                                <input name="VPM" type="number" class="form-control form-control-sm" id="inputEmail4">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Precio:</label>
                                <input name="VPM" type="number" class="form-control form-control-sm" id="inputEmail4">
                            </div>                                  
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <input type="submit" class="btn btn-primary" value="Guardar">
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>
<script src="jquery.js" type="text/javascript"></script>
<script src="ajaxGraficos.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
</html>
