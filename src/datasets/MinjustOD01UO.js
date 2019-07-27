import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import {
    ShowButton,
    EditButton,
    ExportButton, 
    Show,
    SimpleShowLayout,
    List,
    Datagrid,
    TextField,
    TextInput,
    Filter,
} from 'react-admin';


const Minjustod01UOListActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter,
    total
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <ExportButton label="ra.action.export"
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
    </CardActions>
);

const Minjustod01UOFilter = props => (
    <Filter {...props}>
                    <TextInput label="ЄДРПОУ" source="edrpou" alwaysOn />
                    <TextInput label="Назва" source="name" alwaysOn />
                    <TextInput label="Коротка назва" source="shortname" />
                    <TextInput label="Керівник" source="bossname" />
                    <TextInput label="Адреса" source="address" />
                    <TextInput label="КВЕД" source="kved" alwaysOn />
                    <TextInput label="КВЕД повний" source="kvedfull" />
                    <TextInput label="Почтовий індекс" source="postcode" />
                    <TextInput label="Стан реєстрації" source="status" />
    </Filter>
);

export const Minjustod01UOList = (props) => {
        return (<div> <List 
                            {...props}
                            actions={<Minjustod01UOListActions />}
                            title="Юрідични особи"
                            filters={<Minjustod01UOFilter /> }
                            sort={{ field: 'edrpou', order: 'DESC' }}
                            perPage={50}
                    >
                    <Datagrid>
                        <TextField label="ЄДРПОУ" source="edrpou" />
                        <TextField sortable={false} label="Назва" source="name" />
                        <TextField sortable={false} label="Керівник" source="bossname" />
                        <TextField sortable={false} label="Адреса" source="address" />
                        <TextField sortable={false} label="КВЕД" source="kved" />
                        <TextField sortable={false} label="Почтовий індекс" source="postcode" />
                        <TextField sortable={false} label="Стан реєстрації" source="status" />
                        <ShowButton label="ra.action.show"/>
                        {/* <EditButton label="Змінити"/> */}
                    </Datagrid>
                </List>
        </div>
    )
};

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const Minjustod01UOShowActions = ({ basePath, data, resource }) => (
    <CardActions style={cardActionStyle}>
        <EditButton basePath={basePath} record={data} label="ra.action.edit" />
        {/* Add your custom actions */}
    </CardActions>
);

const Minjustod01UOTitle = ({ record }) => {
    return <span>Деталі по {record ? `"${record.edrpou}"` : ''}</span>;
};

export const Minjustod01UOShow = (props) => (
    <div>
        <Show title={<Minjustod01UOTitle />} actions={<Minjustod01UOShowActions />} {...props}>
            <SimpleShowLayout>
                <TextField label="ЄДРПОУ" source="edrpou" />
                <TextField label="Назва" source="name" />
                <TextField label="Коротка назва" source="shortname" />
                <TextField label="Керівник" source="bossname" />
                <TextField label="Адреса" source="address" />
                <TextField label="КВЕД" source="kved" />
                <TextField label="КВЕД повний" source="kvedfull" />
                <TextField label="Почтовий індекс" source="postcode" />
                <TextField label="Стан реєстрації" source="status" />
            </SimpleShowLayout>
        </Show>
    </div>
);