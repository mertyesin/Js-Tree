var sql = require('mssql');

var settings = {
    user: 'sa',
    password: 'sapass',
    server: '192.168.1.62',
    database: 'APPSERP'
}
var conn = new sql.Connection(settings);
conn.connect(function(err) {
    if (err)
        console.log(err);
});



// asflakj fsaj

app.get('/api/permission', GetPermission);

function GetPermission(req, res) {

    var request = new sql.Request(conn);
    request.input('userId',10);
    request.query("SELECT p.RecId, p.ParentId, p.Label,p.LabelFL, up.IsAuth \
     FROM [Z_Permission] p \
     LEFT JOIN [Z_UserPermission] up on p.RecId = up.PermissionId and up.UserId=@userId \
     UNION \
     SELECT pd.PermissionId RecId, pd.DependecyId ParentId, p.Label,p.LabelFL, up.IsAuth \
     FROM [Z_Permission] p \
     inner join [Z_PermissionDependency] pd on pd.permissionId=p.recId \
     LEFT JOIN [Z_UserPermission] up on p.RecId = up.PermissionId and up.UserId=@userId",
     

            function(err, rs) {

                if (err)
                    res.status(500).json({ error: true, message: err });
                else {
                    res.json(rs);
                }
                }
                )

      //console.log(rs);
}