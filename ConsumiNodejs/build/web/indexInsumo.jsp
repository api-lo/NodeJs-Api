<%-- 
    Document   : indexInsumo
    Created on : 31-jul-2021, 4:03:45
    Author     : User
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">        
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    </head>
    <body class="container">
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

        <div class="row">
            <div class="col-6">
                <img src="img/arabica-in-a-queue.png" style="width: 100%; height: 300px;" alt=""/>
                <h4>Ingrese la información sobre los insumos</h4>
                <form action="http://localhost:3000/insert" method="POST" enctype="" >
                    <div class="modal-body">                       
                        <div class="form-row">

                            <div class="form-group col-md-12">
                                <label for="inputEmail4">Nombre de insumo:</label>
                                <input name="Nombre" type="text" class="form-control form-control-sm"  >
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Fecha compra:</label>
                                <input name="FechaCompra"  type="text" class="form-control form-control-sm" >
                            </div>
                            <div class="form-group col-md-5">
                                <label for="inputPassword4">Código de Insumo:</label>
                                <input name="codigo" type="text" class="form-control form-control-sm"  >
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">Categoria:</label>
                                <select  class="form-control form-control-sm" name="categoria">
                                    <option>Muebles</option>
                                    <option>Medicina</option>
                                    <option>Materia desechable</option>
                                    <option>Oficina</option>
                                    <option>Extra</option>
                                </select>
                            </div>
                        </div> 

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Unidades:</label>
                                <input name="unidades" type="number" class="form-control form-control-sm" >
                            </div>  
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Cantidad:</label>
                                <input name="cantidad" type="number" class="form-control form-control-sm" >
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Precio:</label>
                                <input name="precio" type="number" class="form-control form-control-sm" >
                            </div>                                  
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <input type="submit" class="btn btn-success" value="Guardar insumo">
                    </div>
                </form>
            </div>
            <div class="col-6 pt-5">
                <h5 class="pt-5 pb-3">Lista de insumo</h5>
                <div style="width: 100%; height:5   00px; max-height: 500px; overflow-y: auto">
                    <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr><tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        
                    </tbody>
                </table> </div>
                  
            </div>
        </div>

    </body>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>    
    <script src="ajaxInsumos.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
</html>
