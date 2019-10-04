var express = require('express');
const http = require('http');
var router = express.Router();

const CHAVE = '7ec712f43c83bf0a2b372802a3e5d3edc79b82b6';
const SPRINT_NUMBER = 305;

router.get('/tarefasRedmine', function(request, response){ 
    var h = http.request({
        host: 'redmine.camtwo.com.br',
        path: `/projects/clinicanasnuvens/issues.json?set_filter=1&fixed_version_id=${SPRINT_NUMBER}&status_id=%2A`,
        method: 'get',
        headers:{
            'Content-Type': 'application/json',
            'X-Redmine-API-Key': CHAVE
        }
    }, function(res){
        var str = '';
        console.log('Response is '+res.statusCode);
        res.on('data', function (chunk) {
               str += chunk;
         });
        res.on('end', function () {

             var t = JSON.parse(str);
             var retorno = '';
             for (tarefa of t.issues){
                retorno += `sprint_103.tarefas.push(newTarefa(${tarefa.id}, "${tarefa.subject}", []))<br>`;
             }
             response.send(retorno);
        });
    });
    h.end();
})

module.exports = router;
