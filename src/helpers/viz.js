import faker from 'faker';
export const dummyViz = (data) => {
    const res = {
        datasets: data.map((item) => ({
            label: item.nama,
            data: Array.from({ length: 100 }, () => ({
                x: faker.datatype.number({ min: -100, max: 100 }),
                y: faker.datatype.number({ min: -100, max: 100 }),
              }))
        }))
    }
    res.datasets[0].backgroundColor = "rgb(88, 198, 105)"
    res.datasets[1].backgroundColor = "rgb(34, 139, 230)"
    return res
}